import { useState, useEffect } from "react";
import { fetchWords } from "../services/wordService";

const useWords = (initialCount = 50) => {
  const [words, setWords] = useState<string[]>([]);
  const [typedWords, setTypedWords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadWords = async (count = initialCount) => {
    setLoading(true);
    setError(null);
    try {
      const words = await fetchWords(count);
      setWords(words);
      setTypedWords(new Array(words.length).fill(""));
    } catch (error) {
      console.error("Error loading words:", error);
      setError("Error loading words");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWords();
  }, []);

  return { words, typedWords, setTypedWords, loadWords, loading, error };
};

export default useWords;
