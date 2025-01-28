import React from "react";
import gambar from "../assets/keunggulan.png";

const Keunggulan = () => {
  return (
    <div className="py-14">
      {" "}
      <h1 className="text-3xl text-center md:text-left md:text-[40px] font-semibold md:pl-72">
        Keunggulan
      </h1>
      <div className="md:flex md:mx-10 md:pt-12">
        <div>
          <img src={gambar} alt="" className="w-[600px] pt-10" />
        </div>
        <div className="px-5 md:px-10 pt-10 md:w-[50%]">
          <div>
            <h2 className="text-[16px] md:text-[20px] font-semibold">
              Produk Berkualitas Tinggi
            </h2>
            <p>
              Kami hanya menyediakan produk yang teruji kualitasnya dan tahan
              lama untuk mendukung kebutuhan kebersihan Anda.
            </p>
            <hr className="border-t-3 mt-3 border-gray-400" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[20px] font-semibold">
              Harga Terjangkau{" "}
            </h2>
            <p>
              Dapatkan produk kebersihan dengan harga kompetitif tanpa
              mengorbankan kualitas.
            </p>
            <hr className="border-t-3 mt-3 border-gray-400" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[20px] font-semibold">
              Beragam Pilihan Produk{" "}
            </h2>
            <p>
              Kami menyediakan berbagai macam alat kebersihan untuk kebutuhan
              rumah tangga, kantor, hingga industri.{" "}
            </p>
            <hr className="border-t-3 mt-3 border-gray-400" />
          </div>
          <div>
            <h2 className="text-[16px] md:text-[20px] font-semibold">
              Pengiriman Cepat & Aman
            </h2>
            <p>
              Kami menjamin pengiriman produk tepat waktu dengan kemasan yang
              aman sampai ke tangan Anda.
            </p>
            <hr className="border-t-3 mt-3 border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keunggulan;
