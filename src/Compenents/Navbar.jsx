import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Logo from "../assets/1.png";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { CiLock, CiUser } from "react-icons/ci";
import { CgClose } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll behavior
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false); // Navbar hilang saat scroll ke bawah
    } else {
      setIsVisible(true); // Navbar muncul saat scroll ke atas
    }
    setLastScrollY(window.scrollY); // Update posisi scroll terakhir
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-dua md:px-7 p-1 flex justify-between items-center transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex gap-1 md:gap-3 items-center">
          <div className="w-9 md:w-10">
            <a href="#">
              <img src={Logo} alt="logo" className="rounded-full" />
            </a>
          </div>
          <div className="font-semibold md:text-[17px] text-[20px] hover:text-gray-900">
            <a href="#">FARESTA</a>
          </div>
        </div>

        <div className="md:flex gap-8 items-center font-semibold hidden">
          <a href="#" className="hover:text-gray-900">
            Product
          </a>
          <a href="#" className="hover:text-gray-900">
            Promo
          </a>
          <a href="#" className="hover:text-gray-900">
            Tentang Kami
          </a>
          <a href="#" className="hover:text-gray-900">
            Blog/Tips Kebersihan
          </a>
          <a href="#" className="hover:text-gray-900">
            Hubungi kami
          </a>
        </div>

        <div className="hidden font-semibold md:flex items-center cursor-pointer hover:text-gray-950">
          <button onClick={() => setModalOpen(true)}>Login</button>
        </div>

        <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <CgClose className="text-3xl" />
          ) : (
            <BiMenu className="text-3xl" />
          )}
        </button>

        {openMenu && (
          <div className="absolute top-full left-0 w-full bg-dua text-[17px] font-medium py-3 flex flex-col items-center z-40 md:hidden">
            <a href="#" className="pb-1">
              Product
            </a>
            <a href="#" className="pb-1">
              Promo
            </a>
            <a href="#" className="pb-1">
              Tentang Kami
            </a>
            <a href="#" className="pb-1">
              blog/Tips Kebersihan
            </a>
            <a href="#" className="pb-1">
              Hubungi Kami
            </a>
            <a href="#" onClick={() => setModalOpen(true)}>
              Login
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="px-5 relative">
          <CgClose
            onClick={() => setModalOpen(false)}
            className="text-[20px] cursor-pointer absolute right-2"
          />
          <h2 className="text-3xl font-semibold mb-4 text-center py-8">
            Login
          </h2>
          <form>
            <label htmlFor="" className="text-[12px]">
              User Name
            </label>
            <div className="flex items-center gap-2">
              <CiUser />
              <input
                type="text"
                placeholder="Type your username"
                className="placeholder:text-[14px] focus:outline-none py-2 "
              />
            </div>
            <hr className="border-t-2 mb-4" />
            <label htmlFor="" className="text-[12px]">
              Password
            </label>
            <div className="flex items-center gap-2">
              <CiLock />
              <input
                type="Password"
                placeholder="Type your Password"
                className="placeholder:text-[14px] focus:outline-none"
              />
            </div>
            <hr className="border-t-2 pb-1" />
            <a href="#" className="text-[12px] text-right block">
              Forgot Password?
            </a>
          </form>
          <button className="bg-tiga text-white py-2 rounded-full w-full my-5">
            Login
          </button>

          <p className="text-center text-[12px] py-5">Or sign up using</p>
          <div className="flex gap-2 justify-center pb-16">
            <div className="bg-blue-800 inline-block p-2 rounded-full">
              <a href="https://facebook.com">
                <FaFacebookF className="text-white text-[20px]" />
              </a>
            </div>
            <div className="bg-blue-400 inline-block p-2 rounded-full">
              <a href="https://twitter.com">
                <FaTwitter className="text-white text-[18px]" />
              </a>
            </div>
            <div className="bg-red-500 inline-block p-2 rounded-full">
              <a href="https://google.com">
                <FaGoogle className="text-white text-[18px]" />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
