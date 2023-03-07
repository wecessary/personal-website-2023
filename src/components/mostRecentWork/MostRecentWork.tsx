import Image from "next/image";

export const MostRecentWork = () => {
  return (
    <>
      <div className="min-h-screen bg-background flex justify-center">
        <div className="w-[80vw] flex flex-col gap-10">
          <p className="text-3xl xl:text-8xl">MY MOST RECENT WORK</p>
          <div className="flex justify-between items-center gap-1">
            <p className="text-lg md:text-4xl">WAIZ</p>
            <div>
              <Image
                src="/waiz-hero.jpg"
                width={600}
                height={300}
                className="w-full h-auto"
                alt=""
              />
            </div>
            <p className="text-lg md:text-4xl">WARTER</p>
          </div>
          <div className="flex justify-between">
            <p>Visit website</p>
            <p>Visit website</p>
          </div>
        </div>
      </div>
    </>
  );
};
