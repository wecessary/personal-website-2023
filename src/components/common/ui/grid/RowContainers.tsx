import { childDisplayClasses } from "@/const/rowChildPosition";
import { textSizeClasses } from "@/const/textSizes";
import { ReactNode } from "react";

interface RowContainer {
  children: ReactNode;
  textSize: keyof typeof textSizeClasses;
  childPosition: keyof typeof childDisplayClasses;
  sideBorders?: boolean;
  borderColour?: string;
  bottomBorder?: boolean;
  overideDefaultWidth?: boolean;
  p?: string;
  fontBold?: boolean;
  hover?: boolean;
}

export const RowChildContainer = ({
  children,
  textSize,
  childPosition,
  sideBorders,
  borderColour,
  bottomBorder,
  overideDefaultWidth,
  p,
  fontBold,
  hover,
}: RowContainer) => {
  return (
    <div
      className={`${overideDefaultWidth || "w-[90vw] md:w-[80vw]"} ${
        textSizeClasses[textSize]
      } ${childDisplayClasses[childPosition]} ${
        sideBorders && "border-r-2 border-l-2"
      } ${bottomBorder && "border-b-2"} ${borderColour} ${p} ${
        fontBold && "font-bold"
      } ${hover && "hover:bg-black hover:text-background"}`}
    >
      {children}
    </div>
  );
};
