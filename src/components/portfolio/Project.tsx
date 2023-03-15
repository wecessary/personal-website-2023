import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { InfiniteBanner } from "../common/animation/InfiniteBanner";
import { ProjectTitle } from "./Title";

interface ProjectProps {
  title: string;
  projectImages: string[];
  repeatingImages: number;
  client: string;
  role: string;
  techStack: string;
}

export const Project = ({
  title,
  projectImages,
  repeatingImages,
  client,
  role,
  techStack,
}: ProjectProps) => {
  return (
    <>
      <ProjectTitle title={title} />
      <div className="min-h-screen grid grid-rows-2">
        <Row
          localStyles="border-t-2"
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              borderColour="border-black"
              textSize="xs"
              childPosition="flexColCenter"
            >
              <InfiniteBanner
                itemsSrc={projectImages}
                numberOfRepeatItems={repeatingImages}
                itemType="image"
              />
            </RowChildContainer>
          )}
        />
        <Row
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              borderColour="border-black"
              textSize="xs"
              childPosition="none"
            >
              <div className="grid grid-row-4 h-full">
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-black"
                >
                  <p className="text-base px-2">client:</p>
                  <p className="px-2">{client}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-black"
                >
                  <p className="text-base px-2">role:</p>
                  <p className="px-2">{role}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-black"
                >
                  <p className="text-base px-2">tech stack:</p>
                  <p className="px-2">{techStack}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  borderColour="border-black"
                >
                  <p className="px-2">Visit Now</p>
                </RowChildContainer>
              </div>
            </RowChildContainer>
          )}
        />
      </div>
    </>
  );
};
