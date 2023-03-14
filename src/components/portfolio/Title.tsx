import { useInView } from "@react-spring/web";
import { Trail } from "../common/animation/Trail";

export const ProjectTitle = ({ title }: { title: string }) => {
  const [ref, inView] = useInView({ amount: 1, once: true });

  return (
    <div className="flex justify-center border-black min-h-[30vh]">
      <div
        ref={ref}
        className="w-[90vw] md:w-[80vw] border-r-2 border-l-2 border-black flex items-center"
      >
        <div className="ml-1 text-xl md:text-6xl font-bold skew-y-6  scale-y-125  border-4 border-black w-11/12">
          <Trail animationStart={inView}>
            {title.split(" ").map((word) => (
              <span key={word}>{word}</span>
            ))}
          </Trail>
        </div>
      </div>
    </div>
  );
};
