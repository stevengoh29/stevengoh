import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProps {
  logos: Logo[];
}

interface Logo {
  source: StaticImageData;
  width: number;
  height: number;
  label: string;
}

const LogoGroupContainer = (props: IProps) => {
  const { logos } = props;
  return (
    <div className="p-5 rounded-lg text-white font-bold flex">
      {logos.map((logo, index) => {
        return (
          <div className="flex flex-col items-center px-3" key={index}>
            <Image
              src={logo.source}
              width={logo.width}
              height={logo.height}
              alt={`Logo ${index}`}
            />
            <p>{logo.label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LogoGroupContainer;
