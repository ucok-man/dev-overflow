import React from "react";
import Skeleton, { SkeletonTheme as BaseTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonTheme({ children }: { children: React.ReactNode }) {
  return (
    <BaseTheme baseColor="#ffe2cc" highlightColor="#ffb780">
      {children}
    </BaseTheme>
  );
}

export { Skeleton, SkeletonTheme };
