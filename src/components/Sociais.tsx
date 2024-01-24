/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
} from "react-icons/sl";

export default function Sociais() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 mb-4 flex justify-center">
        <Link
          href="https://www.instagram.com/raul_sigoli/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-white/75 mr-4"
        >
          <SlSocialInstagram size={24} />
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-white/75 mr-4"
        >
          <SlSocialFacebook size={24} />
        </Link>
        <Link
          href="https://br.pinterest.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white transition hover:text-white/75"
        >
          <SlSocialPintarest size={24} />
        </Link>
      </div>
    </>
  );
}
