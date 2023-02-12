import { lazy } from "react";

const route = [
  {
    path: "/",
    element: lazy(() => import("./view/Home")),
  },
  {
    path: "/about",
    element: lazy(() => import("./view/About")),
  },
  {
    path: "*",
    element: lazy(() => import("./compoents/404")),
  },
  {
    path: "/login",
    element: lazy(() => import("./compoents/Login")),
  },
];

export default route;
