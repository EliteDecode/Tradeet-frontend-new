import Balloon from "..//../assets/balloon.png";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
// import { Modal } from 'react-responsive-modal';

const Confirmationscreen = ({open,setOpen}) => {

  const onCloseModal = () => setOpen(false);
  return (
    <section className=" fixed z-20 h-screen w-full top-0 left-0 bg-black/50">
        <main open={open} center className="flex flex-col items-center relative justify-center rounded-lg   m-6 p-8 lg:mx-auto lg:w-5/12 border-2 lg:px-12  bg-white">
          <img src={Balloon} alt="balloon" className=" " />

          <button onClick={onCloseModal}>
            <LiaTimesSolid className="right-8 cursor-pointer top-8 text-[#2D2D2D] size-6 absolute lg:hidden" />
          </button>
          <p className="font-semibold leading-[26.82px] text-[22px] text-[#000000] py-4 lg:leading-[58.51px] lg:text-5xl">
            Congratulations!!!
          </p>
          <p className="text-xs px-5 font-normal leading-[14.63px] text-center text-[#2D2D2D] lg:text-[#777777] lg:text-base lg:leading-[19.5px] lg:font-medium lg:px-0 ">
              You Successfully Added A New Campaign.
              <br /> By initiating this campaign, you're not only spreading hope but
              also creating tangible opportunities for those in need
          </p>
          <Link
            to="/donation"
            // onClick={()=>onCloseModal()}
            className="text-center rounded-lg mt-6 bg-[#12362A] text-white font-semibold text-base leading-[19.5px] p-4 border-[#2D2D2D] w-full lg:font-medium lg:leading-[21.94px] lg:text-lg"
          >
            Go to Homepage
          </Link>
        </main>

    </section>
  );
};

export default Confirmationscreen;


