import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 构建配置
  build: {
    // 输出目录
    outDir: "dist",
    // 是否生成源代码映射文件
    sourcemap: false,
    // 是否启用压缩
    minify: "terser",
    // 是否将构建后的文件格式化
    terserOptions: {
      // 生产环境移除console打印
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      // 去掉注释内容
      output: {
        comments: false,
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000, // 端口号
    open: false, // 是否自动打开浏览器
    proxy: {
      "/hive": {
        target: "http://127.0.0.1:8000/",
        changeOrigin: true,
        ws: true,
      },
    },
  },
});
