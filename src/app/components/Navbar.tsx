"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import LogoText from "../../../public/icon/logotextwhite.png";
import Logo from "../../../public/icon/logo.png";

function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row justify-center md:justify-start  items-center gap-10 w-full 2xl:w-[1536px] mt-20 mb-20 bg-[#313131] lg:p-5 rounded-lg">
      <div className="text-4xl xl:text-6xl font-mexican uppercase text-white flex flex-col lg:flex-row items-center justify-center gap-5">
        {/* <span className="text-primary tracking-wide">Burrito</span> De Kadas */}
        <Image
          src={Logo}
          width={100}
          height={150}
          alt="Burrito De Kadas" 
          className="text-primary tracking-wide"
          />
        <Image
          src={LogoText} 
          alt="Burrito De Kadas"
          className="text-primary tracking-wide w-[270px] h-[200px]"
        />
      </div>
      <Link href={"/"}>
        <div className="text-sm lg:text-lg text-white uppercase cursor-pointer hover:text-secondary font-bold tracking-wide">
          Anasayfa
        </div>
      </Link>
      <Link href={"https://qr.adisyo.com/category?g=aaf5aba0-afa7-4783-a909-fe0597c29869"} target="_blank" rel="noreferrer noopener">
        <div className="text-sm lg:text-lg text-white uppercase cursor-pointer hover:text-secondary font-bold tracking-wide">
          Menüler
        </div>
      </Link>
      <Link href={"/contact"}>
      <div className="text-sm lg:text-lg text-white uppercase cursor-pointer hover:text-secondary font-bold tracking-wide pb-5 lg:pb-0">
        İLETİŞİM
      </div>
      </Link>
    </div>
  );
}

export default Navbar;
