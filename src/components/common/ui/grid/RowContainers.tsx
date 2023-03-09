import { childDisplayClasses } from "@/const/rowChildPosition";
import { textSizeClasses } from "@/const/textSizes";
import { ReactNode } from "react";

interface RowContainer {
  children: ReactNode;
  textSize: keyof typeof textSizeClasses;
  childPosition: keyof typeof childDisplayClasses;
}

export const RowChildContainer = ({
  children,
  textSize,
  childPosition,
}: RowContainer) => {
  return (
    <div
      className={`w-[80vw] ${textSizeClasses[textSize]} ${childDisplayClasses[childPosition]}`}
    >
      {children}
    </div>
  );
};
