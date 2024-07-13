import React from "react";

const LeftArrowIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={"50px"}
      height={"50px"}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="M52.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L86.6 256 235.3 404.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-160-160z" />
    </svg>
  );
};

export default LeftArrowIcon;
