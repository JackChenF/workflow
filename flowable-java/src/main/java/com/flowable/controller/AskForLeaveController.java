package com.flowable.controller;
 
import org.flowable.bpmn.model.BpmnModel;
import org.flowable.engine.*;
import org.flowable.engine.runtime.Execution;
import org.flowable.engine.runtime.ProcessInstance;
import org.flowable.image.ProcessDiagramGenerator;
import org.flowable.task.api.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
 
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 工作流流程说明，以请假为例：
 * （1）项目在启动时，根据xml定义的流程图，生成一个流程定义，该流程定义保存在 act_re_procdef 中；
 * （2）当用户发起一个请假申请时，根据流程定义实时生成一个流程实例，该流程实例保存在 act_ru_execution 中，该实例表中会记录父节点的信息；
 * （3）同时在运行任务表中 act_ru_task 会保留当前正在执行的任务信息，注意，这张表只会保留当前任务的信息，不会保留流程已经走过的节点信息，要查询流程已经走过的信息可去 act_hi_taskinst；
 * （4）我们可以在流程运行时实际实例中 act_ru_actinst 追踪每个节点的状态，以及审批的结果。
 */
@RestController
public class AskForLeaveController {
    @Autowired
    RuntimeService runtimeService;
 
    @Autowired
    RepositoryService repositoryService;
 
    @Autowired
    TaskService taskService;
 
    @Autowired
    ProcessEngine processEngine;
 
    /**
     * 查看流程进度图
     * @param resp
     * @param processId 流程id
     * @throws Exception
     */
    @GetMapping("/viewFlowChart")
    public void viewFlowChart(HttpServletResponse resp, String processId) throws Exception {
        ProcessInstance pi = runtimeService.createProcessInstanceQuery().processInstanceId(processId).singleResult();
        if (pi == null) {
            return;
        }
        List<Execution> executions = runtimeService
                .createExecutionQuery()
                .processInstanceId(processId)
                .list();
        List<String> activityIds = new ArrayList<>();
        List<String> flows = new ArrayList<>();
        for (Execution exe : executions) {
            List<String> ids = runtimeService.getActiveActivityIds(exe.getId());
            activityIds.addAll(ids);
        }
        // 生成流程图
        BpmnModel bpmnModel = repositoryService.getBpmnModel(pi.getProcessDefinitionId());
        ProcessEngineConfiguration engconf = processEngine.getProcessEngineConfiguration();
        ProcessDiagramGenerator diagramGenerator = engconf.getProcessDiagramGenerator();
        byte[] buf = new byte[1024];
        int length;
        try (InputStream in = diagramGenerator.generateDiagram(bpmnModel, "png", activityIds, flows, engconf.getActivityFontName(), engconf.getLabelFontName(), engconf.getAnnotationFontName(), engconf.getClassLoader(), 1.0, false); OutputStream out = resp.getOutputStream()) {
            while ((length = in.read(buf)) != -1) {
                out.write(buf, 0, length);
            }
        }
    }
 
    /**
     * 开启一个请假流程
     */
    @GetMapping("/askForLeave")
    public String askForLeave() {
        Map<String, Object> map = new HashMap<>();
        map.put("leaveUser", "张三");
        map.put("name", "ego");
        map.put("reason", "出去玩");
        map.put("days", 10);
        ProcessInstance instance = runtimeService.startProcessInstanceByKey("ask_for_leave", map);
        return "开启请假流程 processId：" + instance.getId();
    }
 
    /**
     * 员工请假提交给组长审核
     */
    @GetMapping("/submitToZuZhang")
    public String submitToZuZhang() {
        // 员工查找到自己的任务，然后提交给组长审批
        List<Task> list = taskService.createTaskQuery().taskAssignee("张三").orderByTaskId().desc().list();
        String info = null;
        for (Task task: list) {
            info = "任务 ID：" + task.getId() + "，任务申请人：" + task.getAssignee() + "，任务是否挂起：" + task.isSuspended();
            //提交给组长的时候，需要指定组长的id
            Map<String, Object> map = new HashMap<>();
            map.put("zuZhangUser", "李四");
            taskService.complete(task.getId(), map);
        }
        return info;
    }
 
    /**
     * 组长审核请假
     */
    @GetMapping("/zuZhangApprove")
    public String zuZhangApprove() {
        List<Task> list = taskService.createTaskQuery().taskAssignee("李四").orderByTaskId().desc().list();
        String info = null;
        for (Task task: list) {
            if ("组长审核".equals(task.getName())) {
                info = "任务 ID：" + task.getId() + "，组长审核人：" + task.getAssignee() + "，任务是否挂起：" + task.isSuspended();
                // 提交给经理的时候，需要指定经理的id
                Map<String, Object> map = new HashMap<>();
                map.put("managerUser", "王五");
                map.put("zuZhangCheckResult", "通过");
                map.put("zuZhangUser", "李四");
                try {
                    taskService.complete(task.getId(), map);
                } catch (Exception e) {
                    e.printStackTrace();
                    info = "组长审核失败：" + task.getId() + " " + task.getAssignee();
                }
            }
        }
        return info;
    }
 
    /**
     * 经理审核通过
     */
    @GetMapping("/managerApprove")
    public String managerApprove() {
        List<Task> list = taskService.createTaskQuery().taskAssignee("王五").orderByTaskId().desc().list();
        String info = null;
        for (Task task: list) {
            info = "经理：" + task.getAssignee() + "，审核通过：" + task.getId() + " 任务";
            Map<String, Object> map = new HashMap<>();
            map.put("managerCheckResult", "通过");
            taskService.complete(task.getId(), map);
        }
        return info;
    }
 
    /**
     * 经理审核拒绝
     */
    @GetMapping("/managerRefuse")
    public String managerRefuse() {
        List<Task> list = taskService.createTaskQuery().taskAssignee("王五").orderByTaskId().desc().list();
        String info = null;
        for (Task task: list) {
            info = "经理：" + task.getAssignee() + "，审核拒绝：" + task.getId() + " 任务";
            Map<String, Object> map = new HashMap<>();
            map.put("managerCheckResult", "拒绝");
            taskService.complete(task.getId(), map);
        }
        return info;
    }
}