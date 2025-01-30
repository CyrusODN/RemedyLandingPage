import React, { LegacyRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Props {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "scale-up";
  threshold?: number;
}

const ScrollAnimationWrapper: React.FC<Props> = ({
  children,
  className = "",
  animation = "fade-up",
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
      className={`scroll-${animation} ${
        isVisible ? "visible" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;
