import { useInView } from "@react-spring/web";
import { Trail } from "../common/animation/Trail";

export const ProjectHeader = ({ title }: { title: string }) => {
  const [ref, inView] = useInView({ amount: 1, once: true });

  return (
    <div ref={ref} className="flex justify-center min-h-[30vh]">
      <div className="w-[90vw] md:w-[80vw] border-r-2 border-l-2 border-orange flex items-center">
        <div className="px-2 font-medium text-xl md:text-5xl lg:text-6xl overflow-hidden text-orange">
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
