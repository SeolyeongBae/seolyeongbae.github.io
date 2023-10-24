import { useEffect, useState } from "react";

const useTypingWords = (completWords: string, delay: number) => {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingWords = setInterval(() => {
      if (words.length === completWords.length) return;

      setWords((prevWord) => {
        let nextWord = prevWord
          ? prevWord + completWords[count]
          : completWords[0];
        setCount(count + 1);

        return nextWord;
      });
    }, delay);

    return () => {
      clearInterval(typingWords);
    };
  });
  return words;
};

export default useTypingWords;
