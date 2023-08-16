import Image, { StaticImageData } from "next/image";
import React from "react";
import CustomTag from "./CustomTag";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

interface IProps {
  source: StaticImageData;
  title: string;
  caption: React.ReactNode;
  tags: Tag[];
  href: string;
  bgColor?: string;
}

interface Tag {
  color: string;
  label: string;
}

const ProjectCard = (props: IProps) => {
  const { source, tags, title, caption, href, bgColor } = props;
  return (
    <div className="max-w-sm border border-slate-700 rounded-lg shadow bg-slate-700">
      <Link href={href}>
        <Image
          src={source}
          alt="ledsmarthome"
          className="rounded-lg w-full h-36"
          style={{ objectFit: "contain", backgroundColor: bgColor || "white" }}
        />
      </Link>
      <div className="p-5">
        <a href="#">
          <Link
            href={href}
            className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {title}
          </Link>
        </a>
        <p className="mb-2 font-normal text-gray-200">{caption}</p>
        <div className="flex flex-wrap gap-y-2">
          {tags.map((tag, index) => {
            return (
              <React.Fragment key={index}>
                <CustomTag color={tag.color} label={tag.label} />
              </React.Fragment>
            );
          })}
        </div>

        <Link
          href={href}
          className="block max-w-fit bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white font-bold py-2 px-3 rounded duration-300 uppercase text-xs mt-5 items-center"
        >
          Read more
          <IoArrowForward className="inline font-bold ml-2" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
