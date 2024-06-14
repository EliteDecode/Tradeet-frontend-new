import React from 'react'
import logo from "../../assets/newLogo.png";

const AuthsHeader = () => {
  return (
    <div className="hidden md:block">
      <div className="w-full h-[100px] bg-[#12362A] text-white text-base font-bold flex items-center justify-center gap-2 ">
        <span>
          <img src={logo} />
        </span>
        <span>TRADEET</span>
      </div>
    </div>
  );
}

export default AuthsHeader
