import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { 
    path: "blog",
    file: "routes/blog/index.tsx" }
] satisfies RouteConfig;
