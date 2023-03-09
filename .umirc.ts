import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "home/index" },
    { path: "/xzs", component: "xzs/index" },
    { path: "/xsq", component: "xsq/index" },
    { path: "/xcz", component: "xcz/index" },
  ],
  npmClient: "pnpm",
});
