import { SvgProps } from "../../../types/SvgProps";

export function EducationNavSvg({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2001_603)">
        <path
          d="M24.335 8.50001L12.5 0.807007L0.664978 8.50001L12.5 16.192L20.5 10.992V16H22.5V9.69301L24.335 8.50001Z"
          fill="#A5A7A7"
        />
        <path
          d="M5.49998 17.5V13.835L12.5 18.385L19.5 13.835V17.5C19.5 18.97 18.486 20.115 17.247 20.838C15.983 21.576 14.302 22 12.5 22C10.698 22 9.01798 21.576 7.75298 20.838C6.51398 20.115 5.49998 18.97 5.49998 17.5Z"
          fill="#A5A7A7"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_603">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
