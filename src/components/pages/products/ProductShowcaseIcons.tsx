import React from "react";

/**
 * Checkmark icon for product features list
 * Matches the user-provided SVG specification exactly:
 * ViewBox 0 0 16 14
 */
export const ProductCheckIcon: React.FC<{
  color?: string;
  className?: string;
}> = ({ color = "currentColor", className = "h-3.5 w-4 shrink-0" }) => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7.19954 13.9044C7.15179 13.9044 7.10456 13.8945 7.06082 13.8753C7.01708 13.8562 6.97777 13.8282 6.94536 13.7931L0.0919653 6.37974C0.0462788 6.33031 0.0159915 6.26864 0.00481031 6.20227C-0.00637092 6.1359 0.00203885 6.06771 0.0290105 6.00605C0.0559821 5.94439 0.100346 5.89192 0.156671 5.85508C0.212997 5.81824 0.278841 5.79862 0.346146 5.79861H3.64499C3.69452 5.79862 3.74347 5.80925 3.78855 5.82979C3.83362 5.85032 3.87376 5.88029 3.90627 5.91766L6.1967 8.55272C6.44423 8.02359 6.92342 7.14256 7.76429 6.06899C9.0074 4.48188 11.3196 2.14773 15.2756 0.0406209C15.3521 -9.64234e-05 15.441 -0.0106642 15.5249 0.0110045C15.6088 0.0326731 15.6815 0.085003 15.7287 0.157661C15.7758 0.230319 15.794 0.318023 15.7797 0.403456C15.7654 0.488889 15.7195 0.565839 15.6512 0.619113C15.6361 0.630917 14.1108 1.83207 12.3554 4.03219C10.7398 6.05684 8.59222 9.36746 7.53545 13.6414C7.51689 13.7165 7.47371 13.7832 7.41281 13.8309C7.3519 13.8786 7.27679 13.9045 7.19944 13.9045L7.19954 13.9044Z"
      fill={color}
    />
  </svg>
);

/**
 * Plus icon for product add-ons list
 * Matches the user-provided SVG specification exactly:
 * ViewBox 0 0 8 8
 */
export const ProductAddonIcon: React.FC<{
  color?: string;
  className?: string;
}> = ({ color = "currentColor", className = "h-2 w-2" }) => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3.2475 3.25004V4.05312e-05H4.33V3.25004H7.5775V4.33337H4.33V7.58337H3.2475V4.33337H0V3.25004H3.2475Z"
      fill={color}
    />
  </svg>
);
