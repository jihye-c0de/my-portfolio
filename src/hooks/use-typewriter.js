import { useEffect, useState } from 'react';

const TYPE_SPEED_MS = 90;
const DELETE_SPEED_MS = 45;
const HOLD_MS = 1500;

/**
 * useTypewriter 훅
 *
 * Props:
 * @param {string[]} words - 순환하며 타이핑할 문구 목록 [Required]
 *
 * Example usage:
 * const typedText = useTypewriter(['웹디자이너입니다', '풀스택 개발자입니다']);
 */
export function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeoutId;

    if (!isDeleting && text === currentWord) {
      timeoutId = setTimeout(() => setIsDeleting(true), HOLD_MS);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((previous) => (previous + 1) % words.length);
    } else {
      const nextText = isDeleting
        ? currentWord.slice(0, text.length - 1)
        : currentWord.slice(0, text.length + 1);
      timeoutId = setTimeout(
        () => setText(nextText),
        isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS,
      );
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}
