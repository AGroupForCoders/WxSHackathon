import React, { SVGAttributes } from "react";

// Centre Podium
export const CentrePodium = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="323"
    height="445"
    viewBox="0 0 323 445"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_292_192)">
      <rect y="41" width="323" height="404" fill="#CEE6FD" />
      <path d="M65 0L1 42H322L265.5 0H65Z" fill="#B0D6F9" />
    </g>
    <defs>
      <clipPath id="clip0_292_192">
        <rect width="323" height="445" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

// Left Podium
export const LeftPodium = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="322"
    height="234"
    viewBox="0 0 322 234"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width="290"
      height="215.897"
      transform="matrix(-1 0 0 1 290 18.1031)"
      fill="#CEE6FD"
    />
    <path d="M322 0L291 18.1032H0L36.5 0H322Z" fill="#B0D6F9" />
    <path d="M290 18.1032L322 0V216.567L290 234V18.1032Z" fill="#DCECFA" />
  </svg>
);

// Right Podium
export const RightPodium = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width="322"
    height="349"
    viewBox="0 0 322 349"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="32" y="27" width="290" height="322" fill="#CEE6FD" />
    <path d="M0 0L31 27H322L285.5 0H0Z" fill="#B0D6F9" />
    <path d="M32 27L0 0V323L32 349V27Z" fill="#DCECFA" />
  </svg>
);

// Podium Star (with prop for changing color)
type PodiumStarProps = SVGAttributes<SVGSVGElement> & { color?: string };
export const PodiumStar = ({
  color = "#FFF2CC",
  ...props
}: PodiumStarProps) => (
  <svg
    width="210"
    height="194"
    viewBox="0 0 210 194"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_25_1028)">
      <path
        d="M95.907 15.9488C99.607 9.01249 109.495 8.86142 113.405 15.6814L138.055 58.6732C139.566 61.3092 142.194 63.1151 145.197 63.581L191.331 70.7394C199.264 71.9704 202.586 81.5773 197.107 87.4456L164.594 122.268C162.571 124.435 161.613 127.388 161.98 130.33L167.461 174.286C168.428 182.039 160.527 187.857 153.41 184.631L108.545 164.299C105.92 163.109 102.91 163.11 100.285 164.301L54.7008 184.983C47.7599 188.132 39.9885 182.67 40.6015 175.072L44.2513 129.836C44.4656 127.181 43.6114 124.55 41.8784 122.527L11.7184 87.3167C6.6128 81.3563 10.0492 72.1064 17.808 70.9252L65.9339 63.5986C69.0539 63.1237 71.7666 61.2037 73.252 58.4191L95.907 15.9488Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_25_1028"
        x="5.30273"
        y="10.6553"
        width="198.505"
        height="183.236"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_25_1028"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_25_1028"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
