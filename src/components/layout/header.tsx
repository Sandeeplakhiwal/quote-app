"use client";
import Link from "next/link";
import React from "react";
import NavLinks from "./navLinks";
import Image from "next/image";

function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-white">
      <div className=" h-12 border border-gray-300  p-2 px-8 flex items-center justify-between">
        <div className=" ">
          <Link href={"/"}>
            <h1 className=" font-bold text-2xl text-red-500">Quotes</h1>
          </Link>
        </div>
        <div className=" w-full hidden sm:flex items-center justify-center ">
          <NavLinks />
        </div>
        <div>
          <Image
            src="/images/default.png"
            width={12}
            height={12}
            alt="avatar"
            className=" h-8 w-8 sm:w-9 rounded-full border border-gray-300"
          />
        </div>
      </div>
      <div className=" w-full flex sm:hidden items-center justify-center mt-4 mb-4  ">
        <NavLinks />
      </div>
    </div>
  );
}

export default Header;
