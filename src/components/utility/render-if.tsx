import React from "react";

type Props = {
  children: React.ReactNode;
  condition: boolean;
};

export function RenderIf({ children, condition }: Props) {
  if (condition === false) {
    return null;
  }
  return <>{children}</>;
}
