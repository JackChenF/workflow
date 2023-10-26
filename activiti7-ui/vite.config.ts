import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig, loadEnv, UserConfig, UserConfigExport } from "vite";
import html from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default (config: UserConfig): UserConfigExport => {
  const mode = config.mode as string;
  return defineConfig({
    base: "./",
    plugins: [
      vue(),
      html({
        inject: {
          injectData: {
            apiURL: loadEnv(mode, process.cwd()).VITE_APP_API,
            title: ""
          }
        },
        minify: true
      }),
      tsconfigPaths(),
      createSvgIconsPlugin({
        iconDirs: [
          resolve(__dirname, "src/assets/icons/svg"),
          resolve(process.cwd(), "src/components/form-designer/svg")
        ],
        symbolId: "icon-[dir]-[name]"
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          /* 自动引入全局scss文件 */
          additionalData: '@import "./src/components/form-designer/styles/global.scss";'
        }
      }
    },
    build: {
      chunkSizeWarningLimit: 1024,
      commonjsOptions: {
        include: /node_modules|lib/
      },
      rollupOptions: {
        output: {
          manualChunks: {
            quill: ["quill"],
            lodash: ["lodash"],
            vlib: ["vue", "vue-router", "element-plus"]
          }
        }
      }
    },
    optimizeDeps: {
      include: ["@/../lib/vuedraggable/dist/vuedraggable.umd.js", "quill"]
    },
    resolve: {
      alias: {
        // 配置别名
        "@": resolve(__dirname, "./src")
      },
      extensions: [".js", ".vue", ".json", ".ts"] // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    server: {
      open: false, // 自动启动浏览器
      host: "0.0.0.0", // localhost
      port: 8001, // 端口号
      https: false,
      hmr: { overlay: false }
    }
  });
};
