export const wordToLetters = (word: string) => {
  return word.split("").map((letter, i) => (
    <span key={i} className={`${letter === " " && "mx-1 lg:mx-3"}`}>
      {letter}
    </span>
  ));
};
