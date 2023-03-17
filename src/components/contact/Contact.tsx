import { Row } from "../common/ui/grid/Row";
import { RowChildContainer } from "../common/ui/grid/RowContainers";

export const Contact = () => {
  return (
    <>
      <section className="grid grid-flow-col min-h-screen grid-rows-3 text-orange">
        <Row
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              textSize="xl"
              childPosition="flexColCenter"
              borderColour="border-orange"
              bottomBorder
              hover
              p="px-2"
            >
              <a href="https://www.linkedin.com/in/wesley-m-h-jessie-7552b295">
                LINKEDIN
              </a>
            </RowChildContainer>
          )}
        />
        <Row
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              textSize="xl"
              childPosition="flexColCenter"
              borderColour="border-orange"
              bottomBorder
              hover
              p="px-2"
            >
              <a href="./WJ_CV_12102022.pdf">CV</a>
            </RowChildContainer>
          )}
        />
        <Row
          animation="noAnimation"
          renderRowChild={() => (
            <RowChildContainer
              sideBorders
              textSize="xl"
              childPosition="flexColCenter"
              borderColour="border-orange"
              bottomBorder
              hover
              p="px-2"
            >
              <a href="https://github.com/wecessary">GITHUB</a>
            </RowChildContainer>
          )}
        />
      </section>
    </>
  );
};
