import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { InfiniteBanner } from "../common/animation/InfiniteBanner";
import { ProjectHeader } from "./ProjectHeader";

interface ProjectProps {
  title: string;
  projectImages: string[];
  repeatingImages: number;
  client: string;
  role: string;
  techStack: string;
  projectUrl: string;
}

export const ProjectTemplate = ({
  title,
  projectImages,
  repeatingImages,
  client,
  role,
  techStack,
  projectUrl,
}: ProjectProps) => {
  return (
    <>
      <ProjectHeader title={title} />
      <div className="min-h-screen grid grid-rows-2 text-orange">
        <Row
          localStyles="border-t-2"
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              borderColour="border-orange"
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
              borderColour="border-orange"
              textSize="xs"
              childPosition="none"
            >
              <div className="grid grid-rows-4 h-full">
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-orange"
                >
                  <p className="text-base px-2">client:</p>
                  <p className="px-2">{client}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-orange"
                >
                  <p className="text-base px-2">role:</p>
                  <p className="px-2">{role}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  bottomBorder
                  borderColour="border-orange"
                >
                  <p className="text-base px-2">tech stack:</p>
                  <p className="px-2">{techStack}</p>
                </RowChildContainer>
                <RowChildContainer
                  textSize="xs"
                  childPosition="flexColCenter"
                  borderColour="border-orange"
                >
                  <p className="px-2">
                    <a
                      className="underline underline-offset-4 hover:no-underline"
                      href={projectUrl}
                    >
                      Visit Now
                    </a>
                  </p>
                </RowChildContainer>
              </div>
            </RowChildContainer>
          )}
        />
      </div>
    </>
  );
};
