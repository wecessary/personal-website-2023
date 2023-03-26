import { waizImages, gymImages } from "@/const/images";
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
        client={"Waiz New Zealand Blue Spring Water"}
        backgroundImg={"bg-waiz"}
        videoUrl={"/waiz-video.mp4"}
        role="Design and Dev"
        techStack="NEXT JS, Typescript, Jest, Cypress.io, Shopify as a headless CMS"
        projectUrl="https://www.waizwater.com/en-GB"
      />
      <ProjectTemplate
        title="(2) GymJournal.co.uk"
        backgroundImg={"bg-gym"}
        videoUrl={"/gym-video-v2.mp4"}
        client={"GymJournal"}
        role="Design and Dev"
        techStack="React, Typescript, NoSQL, React Router, Jest"
        projectUrl="https://gymjournal.co.uk/"
      />
    </>
  );
};
