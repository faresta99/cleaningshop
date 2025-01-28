import React from "react";
import kain from "../assets/kain pel.jpg";
import sikat from "../assets/sikat.png";
import sikatws from "../assets/sikat wc.jpg";
import sapuln from "../assets/sapu lantai.png";
import sapuld from "../assets/sapu lidi.jpg";
import vacumcl from "../assets/vacum cleaner.jpg";
import kainlp from "../assets/kain lap.jpg";
import kuas from "../assets/kuas.jpeg";
import kaca from "../assets/kaca.jpg";
import ts from "../assets/tempat sampah.webp";
import semprot from "../assets/sempot.avif";
import rinso from "../assets/rinso.jpg";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const Product_Unggulan = () => {
  return (
    <div className="md:px-10 py-20">
      <div className="text-center text-3xl font-semibold pb-10">
        Produk Unggulan
      </div>
      <div className="flex gap-5 flex-wrap justify-center">
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <img src={kain} alt="kain Pel" />
          <h3 className="font-semibold py-2">Kain Pell Terlaris Kuat</h3>
          <h4 className="text-red-500 font-bold">Rp.1.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 4.8
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={sikat} alt="Sikat" />
          </div>
          <h3 className="font-semibold py-2">
            Sikat Multi Fungsi untuk Kebutuhan
          </h3>
          <h4 className="text-red-500 font-bold">Rp.5.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={sikatws} alt="Sikat wc" />
          </div>
          <h3 className="font-semibold py-2">Sikat Wc Gagang Melengkung </h3>
          <h4 className="text-red-500 font-bold">Rp.8.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={sapuln} alt="Sikat" />
          </div>
          <h3 className="font-semibold py-2">Sapu Lantai Halus</h3>
          <h4 className="text-red-500 font-bold">Rp.12.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={sapuld} alt="Sikat" />
          </div>
          <h3 className="font-semibold py-2">Sapu Lidi Kuat dan Halus</h3>
          <h4 className="text-red-500 font-bold">Rp.3.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={vacumcl} alt="Vacum Cleaner" />
          </div>
          <h3 className="font-semibold py-2">
            Vacum Cleaner Industri Stainless
          </h3>
          <h4 className="text-red-500 font-bold">Rp.80.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={kuas} alt="Kuas" />
          </div>
          <h3 className="font-semibold py-2">Kuas Pembersih Debu</h3>
          <h4 className="text-red-500 font-bold">Rp.2.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={kainlp} alt="kain lap" />
          </div>
          <h3 className="font-semibold py-2">Kain Lap Piring</h3>
          <h4 className="text-red-500 font-bold">Rp.10.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={kaca} alt="pembersih Kaca" />
          </div>
          <h3 className="font-semibold py-2">Alat Pembersih Kaca</h3>
          <h4 className="text-red-500 font-bold">Rp.15.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={ts} alt="Tempat sampah" />
          </div>
          <h3 className="font-semibold py-2">Jual Tempat Sampah</h3>
          <h4 className="text-red-500 font-bold">Rp.10.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={semprot} alt="Semprot" />
          </div>
          <h3 className="font-semibold py-2">Alat Semprot Air</h3>
          <h4 className="text-red-500 font-bold">Rp.50.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
        <div className="w-48 shadow-lg p-4 border cursor-pointer hover:border-tiga">
          <div className="h-36">
            <img src={rinso} alt="Semprot" />
          </div>
          <h3 className="font-semibold py-2">Rinson Anti Noda Bandel</h3>
          <h4 className="text-red-500 font-bold">Rp.5.000</h4>
          <div className="flex gap-1 items-center text-[14px] py-2">
            <FaStar className="text-orange-500" /> 5.0
          </div>
          <div className="flex gap-1 items-center text-[12px]">
            <CiLocationOn />
            Manggarai
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Unggulan;
