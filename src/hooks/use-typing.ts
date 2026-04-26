import { useEffect, useState } from "react";

export function useTyping(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && text === word) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
    } else {
      t = setTimeout(
        () => {
          setText((cur) =>
            del ? word.substring(0, cur.length - 1) : word.substring(0, cur.length + 1)
          );
        },
        del ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return text;
}
