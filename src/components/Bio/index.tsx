import { BioPageInfo } from "@/types/page-info";
import React from "react";
import { RichText } from "../rich-text";
import { CMSIcon } from "../cms-icon";

type BioInfoProps = {
  bioInfo: BioPageInfo;
};

export default function BioComponents({ bioInfo }: BioInfoProps) {
  // console.log(bioInfo.introduction);
  
  return (

      <div>
      <h1>asdasdasds</h1>
         <RichText content={bioInfo.introduction.raw} />
        <br />


      </div>
    
  );
}
