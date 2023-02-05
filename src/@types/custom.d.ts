declare module "*.module.less" {
  const cssModule: { readonly [key: string]: string };
  export default cssModule;
}

declare module "*.png" {
  const href: string;
  export default href;
}

declare module "*.svg" {
  import React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
