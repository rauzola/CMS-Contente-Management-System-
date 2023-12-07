import { Asset } from "@/types/page-info";
import React from "react";

export default function BioComponents({
  fileName,
  createdAt,
  publishedAt,
  updatedAt,
  url,
}: Asset) {
  return (
    <div>
      <a>{fileName}</a><br />
      <a>{createdAt}</a><br />
      <a>{publishedAt}</a><br />
      <a>{updatedAt}</a>
      <img src={url} alt="" style={{ width: '200px', height: '200px' }} />
      <br />
      <br />
    </div>
  );
}