import { lazy } from "react";

const route = [
  {
    path: "/",
    element: lazy(() => import("./view/TImeRecord")),
  },
  {
    path: "/about",
    element: lazy(() => import("./view/About")),
  },
  {
    path: "*",
    element: lazy(() => import("./components/404")),
  },
  {
    path: "/login",
    element: lazy(() => import("./components/Login")),
  },
];

export default route;
