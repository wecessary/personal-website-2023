import { Rainbow } from "../common/animation/Rainbow";
import { RowChildContainer } from "../common/ui/grid/RowContainers";

export const Cta = () => {
  return (
    <>
      <section className="min-h-[80vh] md:min-h-screen flex justify-center">
        <RowChildContainer
          sideBorders
          textSize="lg"
          childPosition="flexColCenter"
          borderColour="border-orange"
          p="px-2"
        >
          <div className="text-gray-500">TIRED OF</div>
          <div className="text-gray-500">GENRIC</div>
          <div className="text-gray-500">TEMPLATES?</div>
          <Rainbow />
          <div className="text-end text-base md:text-2xl text-black">
            {"Let's talk."}
          </div>
          <div className="text-end text-base md:text-2xl text-black">
            wesleymhj@gmail.com
          </div>
          <div className="text-end text-base md:text-2xl text-black">
            +44 7597296544
          </div>
        </RowChildContainer>
      </section>
    </>
  );
};
