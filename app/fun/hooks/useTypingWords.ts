import { useEffect, useState } from "react";

const useTypingWords = (completeWords: string, delay: number) => {
  const [words, setWords] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < completeWords.length) {
      const typingInterval = setInterval(() => {
        setWords((prevWords) => prevWords + completeWords[count]);
        setCount((prevCount) => prevCount + 1);
      }, delay);

      return () => clearInterval(typingInterval);
    }
  }, [count, completeWords, delay]);

  return words;
};

export default useTypingWords;
