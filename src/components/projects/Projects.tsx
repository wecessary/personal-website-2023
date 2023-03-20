import { waizImages, muscleImages } from "@/const/images";
import { InfiniteBanner } from "../common/animation/InfiniteBanner";
import { InfiniteBannerWrapper } from "../common/ui/InfiniteBannerWrapper";
import { ProjectTemplate } from "./ProjectTemplate";

export const Projects = () => {
  return (
    <>
      <InfiniteBannerWrapper dark>
        <InfiniteBanner
          leftToright
          itemsSrc={Array(10).fill("FEATURED WORK")}
          numberOfRepeatItems={1}
          itemType="text"
        />
      </InfiniteBannerWrapper>
      <InfiniteBannerWrapper borderBt>
        <InfiniteBanner
          itemsSrc={Array(10).fill("FEATURED WORK")}
          numberOfRepeatItems={1}
          itemType="text"
        />
      </InfiniteBannerWrapper>
      <ProjectTemplate
        title="(1)Waiz Water Ecommerce"
        projectImages={waizImages}
        repeatingImages={3}
        client={"Waiz New Zealand Blue Spring Water"}
        role="Design and Dev"
        techStack="NEXT JS, Typescript, Jest, Cypress.io, Shpoify as a headless CMS"
        projectUrl="https://www.waizwater.com/en-GB"
      />
      <ProjectTemplate
        title="(2) Muscle Department"
        projectImages={muscleImages}
        repeatingImages={2}
        client={"myself"}
        role="Design and Dev"
        techStack="React, Typescript, NoSQL, React Router, Jest"
        projectUrl="https://workout-tracker-bd0f5.web.app/"
      />
    </>
  );
};
