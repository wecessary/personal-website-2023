import { alphabets } from "@/const/alphabet";
import { useEffect, useState } from "react";

export const HackerEffect = ({
  text,
  start,
}: {
  text: string;
  start: boolean;
}) => {
  const [content, setContent] = useState(text);

  useEffect(() => {
    if (start) {
      let iteration = 0;
      const interval = setInterval(() => {
        setContent((prev) => {
          return prev
            .split("")
            .map((_, i) => {
              if (iteration - i > 40) {
                return text[i];
              }
              return alphabets[Math.floor(Math.random() * alphabets.length)];
            })
            .join("");
        });
        iteration++;
        if (iteration > 40 + text.length) {
          clearInterval(interval);
        }
      }, 50) as NodeJS.Timer;
    }
  }, [start, text]);

  return (
    <>
      <div>{content}</div>
    </>
  );
};
