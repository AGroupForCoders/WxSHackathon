import React, { SVGAttributes } from "react";

export const FooterBg01 = ({ ...props }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg {...props} width="1440" height="282" preserveAspectRatio="none" viewBox="0 0 1440 282" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path d="M626 98C393.93 22.6791 264 52 0 160.005V282H1440V9.00908C1112 -46 906 188.877 626 98Z" fill="#054D94"/>
    </svg>

  );
};

export const FooterBg02 = ({...props}: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg {...props} width="1440" height="260" preserveAspectRatio="none" viewBox="0 0 1440 260" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1114 90.9997C1272 40.9997 1351.76 69.3347 1440 107V260H0V1.9997C146 -13.0005 283.513 130.34 444 74.9997C734 -25.0003 906.715 156.596 1114 90.9997Z"
        fill="#033363"/>
    </svg>

  );
};

