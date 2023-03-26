import { useScreenSize } from "@/hooks/useScreenSize";
import ReactPlayer from "react-player/lazy";
import { useInView } from "@react-spring/web";
import Image from "next/image";

interface PlayerProps {
  backgroundImg: `bg-${string}`;
  videoUrl: string;
}

export function Player({ backgroundImg, videoUrl }: PlayerProps) {
  const [ref, inView] = useInView({ amount: 1 });
  const { isPhone } = useScreenSize();
  return (
    <div
      className={`relative flex justify-center items-center ${backgroundImg} bg-cover bg-center h-full `}
      ref={ref}
    >
      <div className={`w-[90vw] md:w-[80vw] `}>
        <ReactPlayer
          width="100%"
          muted
          loop
          volume={0}
          playing={inView}
          controls={false}
          url={videoUrl}
          config={{ file: { attributes: { disableRemotePlayback: true } } }}
        />
      </div>
    </div>
  );
}
