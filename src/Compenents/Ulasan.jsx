import React from "react";
import { FaStar } from "react-icons/fa";
import satu from "../assets/satu.jpg";
import dua from "../assets/dua.jpg";

const Ulasan = () => {
  return (
    <div className="md:px-10 py-20 md:flex items-center justify-center">
      <div className="font-semibold text-3xl md:w-1/3  md:hidden text-center pb-10">
        Ulasan
      </div>
      <div className="bg-gray-100 p-10 text-center md:w-1/3">
        <div className="bg-white p-1 inline-block rounded-full shadow-lg mb-7">
          <img
            src={satu}
            alt="ulasan"
            className="rounded-full w-[55px] h-[59px]"
          />
        </div>
        <div className="flex gap-2 justify-center">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>
        <p>
          <span className="text-tiga font-bold text-2xl">"</span>Belanja di toko
          ini sangat memuaskan! Produknya lengkap, kualitasnya bagus, dan
          harganya sangat terjangkau. Pengiriman juga cepat, jadi saya tidak
          perlu menunggu lama. Highly recommended!{" "}
          <span className="text-tiga font-bold text-2xl">"</span>
        </p>
        <p className="font-semibold pt-6 ">Rian, Manggarai</p>
      </div>
      <div className="font-semibold text-3xl w-1/3 text-center hidden md:block">
        Ulasan
      </div>
      <div>
        <div className="md:w-96 bg-gray-100 p-10 text-center">
          <div className="bg-white p-1 inline-block rounded-full shadow-lg mb-7">
            <img
              src={dua}
              alt="ulasan"
              className="rounded-full w-[55px] h-[59px]"
            />
          </div>
          <div className="flex gap-2 justify-center">
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
            <FaStar className="text-orange-500" />
          </div>
          <p>
            <span className="text-tiga font-bold text-2xl">"</span>Barang yang
            saya pesan sampai lebih cepat dari perkiraan! Dikemas dengan rapi,
            jadi tidak ada yang rusak. Luar biasa!{" "}
            <span className="text-tiga font-bold text-2xl">"</span>
          </p>
          <p className="font-semibold pt-6 ">Eklis,Makassar</p>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
