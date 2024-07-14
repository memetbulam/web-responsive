import React from "react";

const MicrophoneIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={"50px"}
      height={"50px"}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path d="M256 96V256c0 35.3-28.7 64-64 64s-64-28.7-64-64V96c0-35.3 28.7-64 64-64s64 28.7 64 64zM96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96S96 43 96 96zM64 208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 83 63.1 151.2 144 159.2V480H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h80 80c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V415.2c80.9-8 144-76.2 144-159.2V208c0-8.8-7.2-16-16-16s-16 7.2-16 16v48c0 70.7-57.3 128-128 128s-128-57.3-128-128V208z" />
    </svg>
  );
};

export default MicrophoneIcon;
