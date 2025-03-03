import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons"; 

function Area() {
  return (
    <div className="mt-20  bg-[#313131] p-5 rounded-lg">
      <div className="flex flex-col justify-center items-center ">
        <div className="font-bold text-2xl lg:text-4xl tracking-wide uppercase text-primary mb-5">
          Konumumuz
        </div>
      </div>
      <div className="bgimage flex flex-col w-full ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.2204358018203!2d27.142451999999995!3d38.436377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd927b04b1b87%3A0x5f6a4f30adf93c46!2sBurritos%20De%20Kadas!5e0!3m2!1str!2str!4v1714818111542!5m2!1str!2str"
          width="100%"
          height="600"
          className="border-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-row items-center gap-2 p-2 cursor-pointer text-white txt-stroke-primary font-semibold text-lg hover:text-primary">
          <FontAwesomeIcon icon={faLocation} width={20} />
            <a href="https://maps.app.goo.gl/uveUYX5UoLePZAtL8" rel="noreferrer" target="_blank">
          <div className="w-full text-xl">

            Alsancak, 1450. Sk. No:18 /A, 35220 Konak/İzmir
          </div>
            </a>
        </div>
        <div className="flex flex-row items-center gap-2 p-2 cursor-pointer text-white txt-stroke-primary font-semibold text-lg hover:text-primary">
          <FontAwesomeIcon icon={faPhone} width={20} />
          <div className="w-full text-xl">+90 (0232) 307 00 77</div>
        </div>
        <div className="flex flex-row items-center gap-2 p-2 cursor-pointer text-white txt-stroke-primary font-semibold text-lg hover:text-primary">
          <FontAwesomeIcon icon={faMailBulk} width={20} />
          <div className="w-full text-xl">burritosdekadasalsancak@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default Area;
