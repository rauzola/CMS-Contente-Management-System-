import { BioPageInfo } from "@/types/page-info";
import React from "react";
import { RichText } from "../rich-text";
import { CMSIcon } from "../cms-icon";

type BioInfoProps = {
  bioInfo: BioPageInfo;
};

export default function BioComponents({ bioInfo }: BioInfoProps) {
  console.log(bioInfo.introduction.raw);
  return (
    <>
      <h1>asdasdasds</h1>
      <div>
        <RichText content={bioInfo.introduction.raw} />
        <br />
        {bioInfo.technologies.map((tech) => (
          <p>{tech.name}</p>
        ))}
        <br />

        {bioInfo.socials.map((contact, index) => (
          <a href={contact.url}>
            url asdasdasd
            <CMSIcon icon={contact.iconSvg} />
          </a>
        ))}
        
      </div>
    </>
  );
}
