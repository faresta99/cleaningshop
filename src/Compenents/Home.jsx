import React from "react";
import gambar from "../assets/Home.jpg";

const Home = () => {
  return (
    <div>
      <div className="md:flex md:items-center md:px-10 py-20">
        <div className="">
          <h1 className="text-3xl md:text-5xl font-semibold md:font-bold text-center md:text-start">
            Cleaning Shoop
          </h1>
          <p className="mt-5 text-center hidden md:block md:text-start">
            Selamat Datang di Toko farsta. <br />
            Kami menyediakan berbagai macam alat kebersihan untuk memenuhi{" "}
            <br />
            kebutuhan rumah tangga, kantor, hingga industri Anda. Produk
            berkualitas <br /> tinggi dengan harga terjangkau, siap menjadikan
            lingkungan Anda lebih <br />
            bersih dan nyaman.
          </p>
          <p className="mt-5 text-center md:hidden">
            Selamat Datang di Toko farsta. Kami menyediakan berbagai macam alat
            kebersihan untuk memenuhi kebutuhan rumah tangga, kantor, hingga
            industri Anda. Produk berkualitas tinggi dengan harga terjangkau,
            siap menjadikan lingkungan Anda lebih bersih dan nyaman.
          </p>
          <div className="flex justify-center md:block">
            <button className="bg-tiga py-2 px-10 rounded-lg mt-8 mx-auto">
              Belanja Sekarang
            </button>
          </div>
        </div>
        <div className="md:w-[340px] md:ml-36 w-[300px] mx-auto">
          <img src={gambar} alt="gambar Home" />
        </div>
      </div>
    </div>
  );
};

export default Home;
