import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "amluckydave-pro",
      description: "the knowledge bank of amluckydave",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "amluckydave-pro",
      description: "统一可交换原神数据标准",
    },
  },

  plugins: [googleAnalyticsPlugin({ id: "G-H6BK8H0332" })],

  theme,

  shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      build: {
        chunkSizeWarningLimit: 1500,
      },
    },
    vuePluginOptions: {},
  }),
});
