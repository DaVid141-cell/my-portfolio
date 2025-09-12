import { useState, useEffect } from "react";

interface TypingProps {
  text: string;
  speed?: number;
  loop?: boolean;
}

export const TypingText = ({ text, speed = 100, loop = false }: TypingProps) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, loop]);

  return (
    <span className="whitespace-pre text-light-red font-bold">
      {displayed}
      <span className="animate-blink">|</span>
    </span>
  );
}
