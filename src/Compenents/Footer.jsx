import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-tiga p-10 flex md:gap-40 gap-5 flex-wrap">
      <div>
        <h3 className="font-semibold text-[15px] mb-2">Informasi Contact</h3>
        <a href="#" className="block text-[14px]">
          jln.Bontoloe baru
        </a>
        <a href="#" className="block text-[14px]">
          084456747890
        </a>
        <a href="#" className="block text-[14px]">
          makan@gmail.com
        </a>
      </div>
      <div>
        <h3 className="font-semibold text-[15px] mb-2">Link Cepat</h3>
        <a href="#" className="block text-[14px]">
          Kebijakan Pengembalian
        </a>
        <a href="#" className="block text-[14px]">
          FAQ
        </a>
        <a href="#" className="block text-[14px]">
          Syarat & Ketentuan
        </a>
      </div>
      <div className="">
        <h3 className="font-semibold text-[15px] mb-2">Media Sosial</h3>
        <div className="flex flex-col items-center">
          {" "}
          <a href="#" className="block text-[14px]">
            <FaYoutube className="text-2xl text-red-500" />
          </a>
          <a href="#" className="block text-[14px]">
            <FaInstagram className="text-2xl text-red-500" />
          </a>
          <a href="#" className="block text-[14px]">
            <FaTwitter className="text-2xl text-blue-500" />{" "}
          </a>
        </div>
      </div>
      <div className="block text-[14px]">
        Hak Cipta: "© 2025 Faresta Shoop. All Rights Reserved."
      </div>
    </div>
  );
};

export default Footer;
