import React, { useState } from 'react';
import ContactImage from '../../assets/img/image 9.png';
import FacebookIcon from '../../assets/img/facebook.png';
import TwitterIcon from '../../assets/img/x-twitter.png';
import InstagramIcon from '../../assets/img/instagram2.png';
import Popup from '../Contact/Popup';

const ContactPage = () => {
  const [showPopup, setShowPopup] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };


  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-0 min-h-screen">
      <div className="bg-[#42684F] text-white py-6 px-10 mb-8 md:mx-auto mx-4 max-w-screen-lg h-[334px] flex justify-center items-center">
        <h1 className="md:text-5xl text-2xl font-bold text-center">
          CONTACT US
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mx-auto max-w-screen-lg px-4">
        <form className=" p-8 md:w-60%" onSubmit={handleSubmit}>
          <h2 className="md:text-2xl text-xs font-bold mb-4">CONTACT FORM</h2>
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Email Address"
                className="w-full border-black border rounded-none px-4 py-2 md:text-sm text-xs"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Subject"
                className="w-full border-black border rounded-none px-4 py-2 md:text-sm text-xs"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Write a message"
              rows="4"
              className="w-full h-72 md:h-[700px] border-black border rounded-none px-4 py-2 md:text-sm text-xs"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#04802E] text-white py-2 px-4 rounded-md font-semibold md:text-sm text-xs"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 md:mt-0 md:ml-4">
          <img
            src={ContactImage}
            alt="Contact Image"
            className="w-full md:w-[540px] p-4"
          />
          <div className="mt-8 md:mt-0 md:text-lg text-sm">
            <div className="mb-4">
              <span className="font-bold ">EMAIL ADDRESS</span>
              <div className="border-b border-gray-400 mb-2"></div>
              <p>tradeet@gmail.com</p>
            </div>
            <div className="mb-4">
              <span className="font-bold">PHONE NUMBER</span>
              <div className="border-b border-gray-400 mb-2"></div>
              <p>08156018858</p>
            </div>
            <div className="mb-4">
              <span className="font-bold">ADDRESS</span>
              <div className="border-b border-gray-400 mb-2"></div>
              <p>Lagos, Nigeria</p>
            </div>
            <div className="flex items-center">
              <span className="font-bold">SOCIAL MEDIA</span>
              <div className="border-b border-gray-400 mb-2"></div>
            </div>
            <div className="flex items-center mt-2">
              <img src={InstagramIcon} className="w-6 h-6 mr-2" />
              <img src={TwitterIcon} className="w-6 h-6 mr-2" />
              <img src={FacebookIcon} className="w-6 h-6 mr-2" />
            </div>
          </div>

          <div style={{ marginBottom: "80px" }}></div>
        </div>
      </div>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default ContactPage;