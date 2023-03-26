import { useScreenSize } from "@/hooks/useScreenSize";
import ReactPlayer from "react-player/lazy";
import { useInView } from "@react-spring/web";
import Image from "next/image";

interface PlayerProps {
  backgroundImg: `bg-${string}`;
  videoUrl: string;
  fallbackImage: string;
}

export function Player({
  backgroundImg,
  videoUrl,
  fallbackImage,
}: PlayerProps) {
  const [ref, inView] = useInView({ amount: 0.9 });
  return (
    <div
      className={`relative flex justify-center items-center ${backgroundImg} bg-cover bg-center h-full `}
      ref={ref}
    >
      <div className={`w-[90vw] md:w-[80vw] relative `}>
        <ReactPlayer
          style={{ position: "relative" }}
          width="100%"
          muted
          loop
          volume={0}
          playing={inView}
          controls={false}
          url={videoUrl}
          config={{ file: { attributes: { disableRemotePlayback: true } } }}
          fallback={<Image src={fallbackImage} fill alt="" />}
        />
      </div>
    </div>
  );
}
