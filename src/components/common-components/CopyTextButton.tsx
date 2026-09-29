"use client";

import { useEffect, useRef, useState } from "react";

interface CopyTextButtonProps {
  text: string;
  label: string;
  /** Element to select as a manual-copy fallback when clipboard access is denied. */
  fallbackSelectId?: string;
}

const CopyTextButton: React.FC<CopyTextButtonProps> = ({ text, label, fallbackSelectId }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      const target = fallbackSelectId ? document.getElementById(fallbackSelectId) : null;
      if (!target) return;
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={label}
      className="inline-flex h-7 cursor-pointer items-center gap-[5px] rounded-full border border-line bg-white px-2.5 text-[12.5px] font-medium text-[#3d3d3d] transition-[border-color,color] duration-[180ms] hover:border-ink hover:text-ink"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
      </svg>
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
};

export default CopyTextButton;
