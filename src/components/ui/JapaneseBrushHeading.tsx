import React from "react";
import { cn } from "@/lib/utils";

interface JapaneseBrushHeadingProps {
  children: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "div";
}

export const JapaneseBrushHeading: React.FC<JapaneseBrushHeadingProps> = ({
  children,
  className,
  wrapperClassName,
  as: Tag = "h2",
}) => {
  return (
    <Tag className={cn("flex justify-center items-center my-4", wrapperClassName)}>
      <div className="relative inline-flex items-center justify-center px-10 sm:px-14 md:px-16 py-2.5 sm:py-3.5 md:py-4">
        {/* Background brush image sized exactly according to the heading text container */}
        <img
          src="/assets/titlebg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none drop-shadow-md"
        />
        <span
          className={cn(
            "relative z-10 font-jansina font-normal text-white text-2xl sm:text-3xl md:text-4xl text-center whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]",
            className
          )}
        >
          {children}
        </span>
      </div>
    </Tag>
  );
};

export default JapaneseBrushHeading;
