import { waizImages, muscleImages } from "@/const/images";
import { ReactNode } from "react";
import { InfiniteBanner } from "../common/ui/InfiniteBanner";
import { Project } from "./Project";

export const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center border-t-2 border-black">
        <BannerContainer dark>
          <InfiniteBanner
            leftToright
            itemsSrc={Array(10).fill("FEATURED WORK ▲")}
            numberOfRepeatItems={1}
            itemType="text"
          />
        </BannerContainer>
      </div>
      <BannerContainer borderBt>
        <InfiniteBanner
          itemsSrc={Array(10).fill("▼ FEATURED WORK")}
          numberOfRepeatItems={1}
          itemType="text"
        />
      </BannerContainer>
      <Project
        title="(1)Waiz Water Ecommerce"
        projectImages={waizImages}
        repeatingImages={3}
        client={"Waiz New Zealand Blue Spring Water"}
        role="Design and Dev"
        techStack="NEXT JS, Typescript, Jest, Cypress.io, Shpoify as a headless CMS"
      />
      <Project
        title="(2) Muscle Department"
        projectImages={muscleImages}
        repeatingImages={2}
        client={"myself"}
        role="Design and Dev"
        techStack="React, Typescript, React Router, Jest, Firebase"
      />
    </>
  );
};

const BannerContainer = ({
  children,
  dark,
  borderBt,
}: {
  children: ReactNode;
  dark?: boolean;
  borderBt?: boolean;
}) => {
  const theme = dark ? "bg-black text-background" : "bg-background text-black";
  return (
    <>
      <div
        className={`flex justify-center border-t-2 ${
          borderBt && "border-b-2"
        } border-black`}
      >
        <div
          className={`w-[90vw] md:w-[80vw] min-h-[15vh] md:min-h-[30vh] flex flex-col justify-center border-r-2 border-l-2 ${theme} border-black`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
