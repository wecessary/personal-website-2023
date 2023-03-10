import { waizImages } from "@/const/images";
import { textSizeClasses } from "@/const/textSizes";
import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";
import { InfiniteBanner } from "../common/ui/InfiniteBanner";

export const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className={`${textSizeClasses.lg} w-[90vw] md:w-[80vw]`}>
          (1)Waiz water ecommerce
        </div>
      </div>
      <div className="min-h-screen grid grid-rows-2">
        <Row
          localStyles="border-t-2"
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              sideBorderColour="border-black"
              textSize="xs"
              childPosition="flexColCenter"
            >
              <InfiniteBanner
                itemsSrc={waizImages}
                numberOfRepeatItems={3}
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
              sideBorderColour="border-black"
              textSize="xs"
              childPosition="none"
            >
              <div className="grid grid-row-4 h-full">
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-base">client:</p>
                  <p className="">New Zealand Blue Spring Water</p>
                </div>
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-base">role:</p>
                  <p>Design and Dev</p>
                </div>
                <div className="row-span-1 border-b-2 border-black flex flex-col justify-center">
                  <p className="text-base">tech stack:</p>
                  <p>
                    NEXT JS, Typescript, Jest, Cypress.io, Shpoify as a headless
                    CMS
                  </p>
                </div>
                <div className="row-span-1  flex flex-col justify-center">
                  <p>Visit Now</p>
                </div>
              </div>
            </RowChildContainer>
          )}
        />

        <Row
          border
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              sideBorderColour="border-black"
              textSize="xs"
              childPosition="none"
            >
              <div className="grid grid-row-2 h-full"></div>
            </RowChildContainer>
          )}
        />
      </div>
    </>
  );
};
