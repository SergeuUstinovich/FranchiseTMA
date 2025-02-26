import { SvgProps } from "../../../types/SvgProps";

export function RadioCustomSvg({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 10.8181 2.23279 9.64778 2.68508 8.55585C3.13738 7.46392 3.80031 6.47177 4.63604 5.63604C5.47177 4.80031 6.46392 4.13738 7.55585 3.68508C8.64778 3.23279 9.8181 3 11 3C12.1819 3 13.3522 3.23279 14.4442 3.68508C15.5361 4.13738 16.5282 4.80031 17.364 5.63604C18.1997 6.47177 18.8626 7.46392 19.3149 8.55585C19.7672 9.64778 20 10.8181 20 12C20 14.3869 19.0518 16.6761 17.364 18.364C15.6761 20.0518 13.3869 21 11 21C8.61305 21 6.32387 20.0518 4.63604 18.364C2.94821 16.6761 2 14.3869 2 12Z"
        stroke="#A5A7A7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
