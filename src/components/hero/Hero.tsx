import { moveBall } from "@/const/spring";
import { wordToLetters } from "@/lib/string/wordToLetters";
import { useSpring, animated } from "@react-spring/web";
import { Trail } from "../common/animation/Trail";

export const Hero = () => {
  const springs = useSpring(moveBall);

  return (
    <section className="grid grid-rows-6 grid-flow-col min-h-screen">
      <div className="row-span-1 border-b-[1px] border-black self-end text-8xl overflow-y-hidden">
        <Trail>{wordToLetters("WESLEY JESSIE")}</Trail>
      </div>
      <div className="row-span-1 border-b-[1px] border-black self-end text-end text-8xl overflow-y-hidden">
        <span className="text-base">
          <Trail>{wordToLetters("(creative)")}</Trail>
        </span>
        <Trail>{wordToLetters("FRONT END DEVELOPER")}</Trail>
      </div>
      <div className="row-span-3 border-b-[1px] border-black">
        <div className="grid grid-rows-3 grid-flow-col h-full">
          <div className="row-span-1">
            <div className="text-4xl">wesleymhj@gmail.com</div>
            <div className="text-4xl">+44 7597296544</div>
          </div>
          <div className="row-span-2 self-end justify-self-end">
            <animated.div style={{ ...springs }}>
              <div className="bg-black rounded-full w-64 h-64 relative">
                <animated.div className="bg-[#D9D9D9] rounded-full w-12 h-12 top-16 left-2 absolute"></animated.div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
      <div className="text-8xl self-end">
        <Trail>{wordToLetters("LONDON, UK")}</Trail>
      </div>
    </section>
  );
};
