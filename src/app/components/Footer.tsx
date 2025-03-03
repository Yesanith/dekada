import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Circle from '@components/Circle';

function Footer() {
  return (
    <div className="flex flex-col w-full mt-20 bg-[#313131] p-5 rounded-lg">
      <div className="flex flex-col w-full max-w-screen lg:flex-row gap-20 ">
        <div className="flex flex-col w-full max-w-screen lg:max-w-xs">
          <div className="border-b-2 text-center border-gray-600 text-primary  py-2 text-lg lg:text-xl  uppercase font-bold">
            BURRİTOS de Kadas
          </div>
          <Link href={"/"}>
            <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer text-white hover:text-secondary">
              <FontAwesomeIcon icon={faArrowRight} width={20} />
              <div className="w-full text-lg lg:text-xl">
                Anasayfa
              </div>
            </div>
          </Link>
          <Link href={"https://qr.adisyo.com/category?g=aaf5aba0-afa7-4783-a909-fe0597c29869"} target="_blank" rel="noreferrer noopener">
          <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer text-white hover:text-secondary">
            <FontAwesomeIcon icon={faArrowRight} width={20} />
            <div className="w-full text-lg lg:text-xl">Menüler</div>
          </div>
          </Link>
          <Link href={"/contact"}>
          <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer text-white hover:text-secondary">
            <FontAwesomeIcon icon={faArrowRight} width={20} />
            <div className="w-full text-lg lg:text-xl">
              İletişim
            </div>
          </div>
          </Link>
        </div>

        <div className="flex flex-col w-full max-w-screen lg:max-w-xs">
          <div className="border-b-2 text-center border-gray-600 text-primary  py-2 text-lg lg:text-xl uppercase font-bold">
            Sosyal
          </div>
          <div className="flex flex-row gap-10 items-center justify-center">
            <Link href={"https://www.instagram.com/burritosdekadas/"} rel="noreferrer noopener" target="_blank">
            <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer hover:text-secondary text-white">
              <FontAwesomeIcon icon={faInstagram} width={48} />
            </div>
            </Link>
            {/* <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer hover:text-secondary text-white">
              <FontAwesomeIcon icon={faFacebook} width={35} />
            </div>
            <div className="flex flex-row items-center gap-2 mt-5 cursor-pointer hover:text-secondary text-white">
              <FontAwesomeIcon icon={faXTwitter} width={35} />
            </div> */}
          </div>
        </div>

        <div className="flex flex-col w-full max-w-screen lg:max-w-xs">
          <div className="border-b-2 text-center border-gray-600 text-primary  py-2 text-lg lg:text-xl  uppercase font-bold">
            Mekanlarımız
          </div>
          <Link href={"/places/izmir"} className="flex flex-row items-center gap-2 mt-5 cursor-pointer text-white hover:text-secondary">
            <FontAwesomeIcon icon={faArrowRight} width={20} />
            <div className="w-full text-lg lg:text-xl">İzmir</div>
          </Link>
        </div>

        <div className="flex flex-col w-full max-w-screen lg:max-w-xs">
          <div className="border-b-2 text-center border-gray-600 text-primary  py-2 text-lg lg:text-xl uppercase font-bold">
            İLETİŞİM
          </div>
          <div className="flex flex-row items-center mt-5">
            Hakkımızda, hizmetlerimiz ve ürünlerimiz hakkında detaylı bilgi için
            aşağıdaki butona tıklayarak hemen bizimle iletişime geçebilirsiniz.
          </div>
          <div className="flex items-center rounded-lg p-3 uppercase lg:border-2 lg:hover:bg-secondary hover:text-white cursor-pointer text-sm mt-2">
            <FontAwesomeIcon icon={faPhone} width={20} />
            <div className="w-full text-sm ml-5">bize ulaşın</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
          <Circle />
      </div>
      <div className="text-gray-600 text-sm float-left mt-10 text-center">
        Burritodekadas © Copyright 2024. Tüm hakları saklıdır.
      </div>
    </div>
  );
}

export default Footer;
