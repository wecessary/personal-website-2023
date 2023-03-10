import { childDisplayClasses } from "@/const/rowChildPosition";
import { textSizeClasses } from "@/const/textSizes";
import { ReactNode } from "react";

interface RowContainer {
  children: ReactNode;
  textSize: keyof typeof textSizeClasses;
  childPosition: keyof typeof childDisplayClasses;
  sideBorders?: boolean;
  sideBorderColour?: string;
}

export const RowChildContainer = ({
  children,
  textSize,
  childPosition,
  sideBorders,
  sideBorderColour,
}: RowContainer) => {
  return (
    <div
      className={`w-[90vw] md:w-[80vw] ${textSizeClasses[textSize]} ${
        childDisplayClasses[childPosition]
      } ${sideBorders && "border-r-2 border-l-2"} ${sideBorderColour}`}
    >
      {children}
    </div>
  );
};
