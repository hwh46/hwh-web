import { Spin } from "antd";
import { Suspense } from "react";
import { useRoutes, RouteObject } from "react-router-dom";
import { RouteProps } from "./module/main";
import route from "./router";

const lazyRouter = (routes: any) => {
  const elements: RouteObject[] = [];
  routes.forEach((route: RouteProps) => {
    elements.push({
      path: route.path,
      element: (
        <Suspense
          fallback={
            <div style={{ width: "100%", height: "100%", textAlign: "center", lineHeight: 1 }}>
              <Spin size="large" tip="Loading..." />
            </div>
          }
        >
          <route.element />
        </Suspense>
      ),
      children: route.children && lazyRouter(route.children),
    });
  });

  return elements;
};

export default () => useRoutes(lazyRouter(route));
