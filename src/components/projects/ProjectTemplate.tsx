import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { Player } from "../common/ui/Player";
import { ProjectHeader } from "./ProjectHeader";

interface ProjectProps {
  title: string;
  client: string;
  role: string;
  techStack: string;
  projectUrl: string;
  backgroundImg: `bg-${string}`;
  videoUrl: string;
  fallbackImage: string;
}

export const ProjectTemplate = ({
  title,
  client,
  role,
  techStack,
  projectUrl,
  backgroundImg,
  videoUrl,
  fallbackImage,
}: ProjectProps) => {
  return (
    <>
      <ProjectHeader projectUrl={projectUrl} title={title} />
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
              <Player
                fallbackImage={fallbackImage}
                backgroundImg={backgroundImg}
                videoUrl={videoUrl}
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
