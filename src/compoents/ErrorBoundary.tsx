import React, { Component } from "react";

type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

export class ErrorBoundary extends Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };

  // 当子组件抛出异常的时候，这里会接收到异常并赋值给了state
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;

    // 当子组件抛出异常时 就渲染传入进来的抛出异常时渲染的组件 反之正常渲染
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
