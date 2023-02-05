import React from "react";
import { Color } from "./themeColor";

export interface RouteProps {
  path: string;
  element: React.LazyExoticComponent<any>;
  children?: RouteProps[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}

export interface ThemeParam {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<Color>>;
}
