import { useInView } from "@react-spring/web";
import { Trail } from "../common/animation/Trail";

export const ProjectHeader = ({
  title,
  projectUrl,
}: {
  title: string;
  projectUrl: string;
}) => {
  const [ref, inView] = useInView({ amount: 1, once: true });

  return (
    <div ref={ref} className="flex justify-center min-h-[20vh] md:min-h-[30vh]">
      <div className="w-[90vw] md:w-[80vw] border-r-2 border-l-2 border-orange overflow-hidden flex items-center">
        <div className="px-2 font-bold text-xl md:text-5xl lg:text-6xl text-orange">
          <a href={projectUrl}>
            <Trail animationStart={inView}>
              {title.split(" ").map((word) => (
                <span key={word}>{word}</span>
              ))}
            </Trail>
          </a>
        </div>
      </div>
    </div>
  );
};
