import React, { createContext, ReactNode, useState } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeParam } from "./module/main";
import { Color } from "./module/themeColor";

export const Thecontext = createContext<ThemeParam>({} as ThemeParam);

export function ThemeContext({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(Color.WHITE);
  return (
    <Thecontext.Provider value={{ theme, setTheme }}>
      <ErrorBoundary
        fallbackRender={(error) => (
          <div>
            <>出错了：{error}</>
          </div>
        )}
      >
        {children}
      </ErrorBoundary>
    </Thecontext.Provider>
  );
}
