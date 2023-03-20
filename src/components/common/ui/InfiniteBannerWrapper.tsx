import { ReactNode } from "react";

export const InfiniteBannerWrapper = ({
  children,
  dark,
  borderBt,
}: {
  children: ReactNode;
  dark?: boolean;
  borderBt?: boolean;
}) => {
  const theme = dark
    ? "bg-orange text-background"
    : "bg-background text-orange";
  return (
    <>
      <div
        className={`flex justify-center border-t-2 ${
          borderBt && "border-b-2"
        } border-orange`}
      >
        <div
          className={`w-[90vw] md:w-[80vw] min-h-[15vh] md:min-h-[30vh] flex flex-col justify-center border-x-2 ${theme} border-orange`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
