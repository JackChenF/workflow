export default {
  application: {
    "zh-CN": "简体中文",
    "en-US": "English",
    productTitle: "Online Form Designer",
    github: "GitHub",
    document: "Docs",
    qqGroup: "WeChat Group",
    deployment: "Deployment",
    subscription: "Subscription"
  },

  designer: {
    componentLib: "Components",
    formLib: "Templates",
    containerTitle: "Container",
    dragHandlerHint: "drag container or field to layout center",
    dragAction: "drag",
    basicFieldTitle: "Basic Field",
    advancedFieldTitle: "Advanced Field",
    customFieldTitle: "Customized Field",

    noWidgetHint: "Please select a widget from the left list, drag and drop to this container.",

    widgetLabel: {
      grid: "Grid",
      table: "Table",
      tab: "Tab",
      section: "Section",
      "sub-form": "SubForm",
      "grid-col": "GridCol",
      "table-cell": "TableCell",
      "tab-pane": "TabPane",
      "data-table": "DataTable",

      input: "Input",
      textarea: "Textarea",
      number: "InputNumber",
      radio: "Radio",
      checkbox: "Checkbox",
      select: "Select",
      time: "Time",
      "time-range": "Time range",
      date: "Date",
      "date-range": "Date range",
      switch: "Switch",
      rate: "Rate",
      color: "ColorPicker",
      slider: "Slider",
      "static-text": "Text",
      "html-text": "HTML",
      button: "Button",
      divider: "Divider",

      "picture-upload": "Picture",
      "file-upload": "File",
      "rich-editor": "Rich Editor",
      cascader: "Cascader",
      slot: "Slot",

      custom: "Custom Component"
    },

    hint: {
      selectParentWidget: "Select parent of this widget",
      moveUpWidget: "Move up this widget",
      moveDownWidget: "Move down this widget",
      cloneWidget: "Clone this widget",
      insertRow: "Insert new row",
      insertColumn: "Insert new column",
      remove: "Remove this widget",
      cellSetting: "Cell setting",
      dragHandler: "Drag handler",
      copyField: "Copy field widget",
      onlyFieldWidgetAcceptable: "Only field widget can be dragged into sub-form",
      moveUpFirstChildHint: "First child can not be move up",
      moveDownLastChildHint: "Last child can not be move down",

      closePreview: "Close",
      copyJson: "Copy",
      saveFormJson: "Save As File",
      copyVueCode: "Copy Vue Code",
      copyHtmlCode: "Copy HTML Code",
      copyJsonSuccess: "Copy succeed",
      importJsonSuccess: "Import succeed",
      invalidJsonFormat: "Invalid JSON format",
      jsonVersionMismatch: "Version of JSON mismatch",
      copyJsonFail: "Copy failed",
      copyVueCodeSuccess: "Copy succeed",
      copyVueCodeFail: "Copy failed",
      copyHtmlCodeSuccess: "Copy succeed",
      copyHtmlCodeFail: "Copy failed",
      saveVueCode: "Save Vue File",
      saveHtmlCode: "Save Html File",
      getFormData: "Get Data",
      resetForm: "Reset",
      disableForm: "Disable",
      enableForm: "Enable",
      exportFormData: "Form Data",
      copyFormData: "Copy",
      saveFormData: "Save As File",
      copyVue2SFC: "Copy Vue2",
      copyVue3SFC: "Copy Vue3",
      copySFCFail: "Copy failed",
      copySFCSuccess: "Copy succeed",
      saveVue2SFC: "Save As Vue2",
      saveVue3SFC: "Save As Vue3",
      fileNameForSave: "File name:",
      saveFileTitle: "Save as File",
      fileNameInputPlaceholder: "Enter the file name",
      sampleLoadedSuccess: "Example loaded successfully",
      sampleLoadedFail: "Sample load failed",
      loadFormTemplate: "Load This",
      loadFormTemplateHint: "Are you sure to load this template?",
      loadFormTemplateSuccess: "Load form template success!",
      loadFormTemplateFailed: "Load form template failed.",
      currentNodeCannotBeSelected: "The current node cannot be selected.",

      widgetSetting: "Widget Config",
      formSetting: "Form Config",

      prompt: "Prompt",
      confirm: "OK",
      cancel: "Cancel",
      import: "Import",
      importJsonHint: "The code to be imported should have the following JSON format.",
      invalidOptionsData: "Invalid data of options:",
      lastPaneCannotBeDeleted: "The last pane cannot be deleted.",
      duplicateName: "Duplicate name: ",
      nameRequired: "Name required.",

      numberValidator: "Number",
      letterValidator: "Letter",
      letterAndNumberValidator: "LetterAndNumber",
      mobilePhoneValidator: "MobilePhone",
      emailValidator: "Email",
      urlValidator: "URL",
      noChineseValidator: "Non-Chinese",
      chineseValidator: "Chinese",

      rowspanNotConsistentForMergeEntireRow:
        "Cells in this row don't have the same rowspan, operation failed.",
      colspanNotConsistentForMergeEntireColumn:
        "Cells in this column don't have the same colspan, operation failed.",
      rowspanNotConsistentForDeleteEntireRow:
        "Cells in this row don't have the same rowspan, operation failed.",
      colspanNotConsistentForDeleteEntireColumn:
        "Cells in this column don't have the same colspan, operation failed.",
      lastColCannotBeDeleted: "The last col cannot be deleted.",
      lastRowCannotBeDeleted: "The last row cannot be deleted."
    },

    toolbar: {
      undoHint: "Undo",
      redoHint: "Redo",
      pcLayout: "PC",
      padLayout: "Pad",
      mobileLayout: "H5",
      nodeTreeHint: "Tree View Of Component Hierarchy",
      nodeTreeTitle: "Tree View Of Component Hierarchy",
      clear: "Clear",
      preview: "Preview",
      importJson: "Import",
      exportJson: "Export",
      exportCode: "Codes",
      generateCode: "Generate Code",
      generateSFC: "Generate SFC"
    },

    setting: {
      basicSetting: "Basic Setting",
      attributeSetting: "Attribute Setting",
      commonSetting: "Common Setting",
      advancedSetting: "Advanced Setting",
      eventSetting: "Event Setting",
      uniqueName: "Unique Name",
      editNameHelp: "Press enter to confirm the modification",
      label: "Label",
      displayType: "Type",
      defaultValue: "Default Value",
      placeholder: "Placeholder",
      startPlaceholder: "Start Placeholder",
      endPlaceholder: "End Placeholder",
      widgetColumnWidth: "Width",
      widgetSize: "Size",
      fontSize: "Font Size",
      textAlign: "Text Align",
      autoFullWidth: "Auto Full Width",
      showStops: "Show Stops",
      displayStyle: "Display Style",
      inlineLayout: "inline",
      blockLayout: "block",
      buttonStyle: "Show As Button",
      border: "Show Border",
      labelWidth: "Width Of Label",
      rows: "Rows",
      labelHidden: "Hide Label",
      required: "Required",
      requiredHint: "Failure Hint",
      validation: "Validation",
      validationHelp: "Regular expressions supported",
      validationHint: "Validation Hint",
      readonly: "Readonly",
      disabled: "Disabled",
      hidden: "Hidden",
      textContent: "Text",
      preWrap: "Line Wrap",
      htmlContent: "HTML",
      clearable: "Clearable",
      editable: "Editable",
      format: "Format",
      valueFormat: "Value Format",
      showPassword: "Show Reveal",
      filterable: "Filterable",
      allowCreate: "Allow Create",
      remote: "Remote Query",
      automaticDropdown: "Automatic Dropdown",
      multiple: "Multiple",
      multipleLimit: "Multiple Limit",
      checkStrictly: "Any Level Selectable",
      showAllLevels: "Show All Levels",
      contentPosition: "Content Position",
      plain: "Plain",
      round: "Round",
      circle: "Circle",
      icon: "Icon",
      optionsSetting: "Options Setting",
      addOption: "Add Option",
      importOptions: "Import Options",
      resetDefault: "Reset Default",
      uploadSetting: "Upload Setting",
      uploadURL: "Upload URL",
      uploadTip: "Tip Content",
      withCredentials: "Send Cookie",
      multipleSelect: "File Multi-select",
      showFileList: "Show File List",
      limit: "Max Upload Number",
      fileMaxSize: "Max Size(MB)",
      fileTypes: "Upload File Types",
      fileTypesHelp: "Allows to add more file types",
      headers: "Request Headers",

      cellWidth: "Width",
      cellHeight: "Height",
      wordBreak: "Line Wrap",
      gridColHeight: "Height Of Col(px)",
      gutter: "Gutter(px)",
      columnSetting: "Cols Setting",
      colsOfGrid: "Cols Of Grid:",
      colSpanTitle: "Spans Of Col",
      colOffsetTitle: "Offset Of Col",
      colPushTitle: "Push Of Col",
      colPullTitle: "Pull Of Col",
      addColumn: "Add Column",
      responsive: "Responsive",

      tabPaneSetting: "Tab Panes",
      addTabPane: "Add Tab Pane",
      paneActive: "Active",

      customLabelIcon: "Custom Label",
      labelIconClass: "Label Icon Class",
      labelIconPosition: "Label Icon Position",
      labelTooltip: "Label Tooltip",
      minValue: "Min Value",
      maxValue: "Max Value",
      precision: "Precision",
      step: "Step",
      controlsPosition: "Controls Position",
      minLength: "Min Length",
      maxLength: "Max Length",
      showWordLimit: "Show Word Limit",
      prefixIcon: "Prefix Icon",
      suffixIcon: "Suffix Icon",
      inputButton: "Input Button Setting",
      appendButton: "Append Button",
      appendButtonDisabled: "Button Disabled",
      appendButtonIcon: "Append Button Icon",
      buttonIcon: "Button Icon",
      switchWidth: "Width of Switch(px)",
      activeText: "Active Text",
      inactiveText: "Inactive Text",
      activeColor: "Active Color",
      inactiveColor: "Inactive Color",
      maxStars: "Stars Max Number",
      lowThreshold: "Low Threshold",
      highThreshold: "High Threshold",
      allowHalf: "Allow Half",
      showText: "Show Text",
      showScore: "Show Score",
      range: "Range",
      vertical: "Vertical",
      showBlankRow: "Show Blank Row",
      showRowNumber: "Show Row Number",
      contentHeight: "Content Area Height",

      insertColumnToLeft: "insert column to left",
      insertColumnToRight: "insert column to right",
      insertRowAbove: "insert row above",
      insertRowBelow: "insert row below",
      mergeLeftColumn: "merge left cell",
      mergeRightColumn: "merge right cell",
      mergeEntireRow: "merge entire row",
      mergeRowAbove: "merge cell above",
      mergeRowBelow: "merge cell below",
      mergeEntireColumn: "merge entire column",
      undoMergeCol: "undo merge column",
      undoMergeRow: "undo merge row",
      deleteEntireCol: "delete entire column",
      deleteEntireRow: "delete entire row",

      widgetName: "Unique Name",
      formSize: "Size",
      labelPosition: "Position Of Label",
      topPosition: "Top",
      leftPosition: "Left",
      labelAlign: "Label Align",
      leftAlign: "Left",
      centerAlign: "Center",
      rightAlign: "Right",
      formCss: "Form CSS",
      addCss: "Edit",
      customClass: "Custom Class",
      globalFunctions: "Global Functions",
      addEventHandler: "Edit",
      editWidgetEventHandler: "Edit Widget Event Handler",
      editFormEventHandler: "Edit Form Event Handler",
      formSFCSetting: "SFC Setting",
      formModelName: "Model Name",
      formRefName: "Ref Name",
      formRulesName: "Rules Name",
      syntaxCheckWarning: "Syntax error in the javascript codes, please check again!"
    }
  }
};
