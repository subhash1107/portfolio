import React from "react";
import {  FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RxCross1} from "react-icons/rx";

const AsideBar = (props) => {
  return (
    <div className="p-6 bg-[#222831] rounded-xl relative">
      <RxCross1 size={28} className="font-bold text-yellow-600 absolute top-1 right-1 md:hidden" onClick={()=>props.setShowAside(false)}/>
      <section className="profile flex flex-col items-center mt-6">
        <div className="h-[120px] w-[120px] bg-[#31363F] rounded-xl overflow-hidden">
          <img className="w-full" src="profile.png" alt="profile image" />
        </div>
        <h3 className="text-white text-xl mt-4 font-semibold">
          Subhash Satyarthi
        </h3>
        <h4 className="bg-[#31363F] text-white rounded-lg px-3 py-1 mt-4">
          web developer
        </h4>
        <hr className="mt-4 border border-[#31363F] w-full" />
      </section>
      <section>
        <div className="contact flex gap-2 hover:scale-105">
          <div className="w-[50px] h-[50px] bg-[#31363F] rounded-lg shadow-xl flex items-center justify-center mt-4">
            <FaGithub className="text-xl text-yellow-600" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mt-4">GITHUB</h4>
            <a
              href="https://github.com/subhash1107"
              target="_blank"
              className="text-white text-xs truncate block max-w-[130px] hover:overflow-visible hover:whitespace-normal"
            >
                github/subhash1107
            </a>
          </div>
        </div>
        <div className="contact flex gap-2 hover:scale-105">
          <div className="w-[50px] h-[50px] bg-[#31363F] rounded-lg shadow-xl flex items-center justify-center mt-4">
            <FaLinkedin className="text-xl text-yellow-600" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mt-4">LINKEDIN</h4>
            <a
              href="https://www.linkedin.com/in/subhash-satyarthi-137304189/"
              target="_blank"
              className="text-white text-xs truncate block max-w-[130px] hover:overflow-visible hover:whitespace-normal"
            >
              linkedin/subhash-satyarthi
            </a>
          </div>
        </div>
        <div className="contact flex gap-2 hover:scale-105">
          <div className="w-[50px] h-[50px] bg-[#31363F] rounded-lg shadow-xl flex items-center justify-center mt-4">
            <FaEnvelope className="text-xl text-yellow-600" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mt-4">EMAIL</h4>
            <a
              href="mailto:subhashmail1107@gmail.com"
              target="_blank"
              className="text-white text-xs truncate block max-w-[130px] hover:overflow-visible hover:whitespace-normal"
              title="subhashmail1107@gmail.com"
            >
              subhashmail1107@gmail.com
            </a>
          </div>
        </div>
        <div className="contact flex gap-2 hover:scale-105">
          <div className="w-[50px] h-[50px] bg-[#31363F] rounded-lg shadow-xl flex items-center justify-center mt-4">
            <FaLocationDot className="text-xl text-yellow-600" />
          </div>
          <div>
            <h4 className="text-gray-500 text-sm mt-4">LOCATION</h4>
            <p className="text-white text-xs">NEW DELHI</p>
          </div>
        </div>
        <div className="social flex gap-4 mt-4 justify-center">
            <FaFacebook className="text-sm text-gray-500 hover:scale-140" />
            <a href="https://x.com/yadav_subhashh?s=09" target="_blank"><FaTwitter className="text-sm text-gray-500 hover:scale-140 " /></a>
            <a href="https://www.instagram.com/your_subhashh/" target="_blank"><FaInstagram className="text-sm text-gray-500 hover:scale-140" /></a>
        </div>
      </section>
    </div>
  );
};

export default AsideBar;
