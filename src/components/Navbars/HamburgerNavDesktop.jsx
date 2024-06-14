import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../services/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const HamburgerNavDesktop = () => {
  const [isOpen, setisOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logoutHandler = async () => {
    try {
      dispatch(reset());
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const menuItems = [
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
    { name: "See Wishlist", to: "" },
    { name: "Donate", to: "/donor" },
    { name: "Sell on Tradeet", to: "" },
  ];
  return (
    <section>
      {!isOpen ? (
        <button className=" text-2xl" onClick={() => setisOpen(!isOpen)}>
          <AiOutlineMenu />
        </button>
      ) : (
        <div className="absolute top-5 left-10 w-[300px] z-50 bg-brand-green rounded-sm transition-all ease-in delay-1000  ">
          <div className=" absolute top-0 left-0 z-50 w-full  bg-white opacity-100 py-3 overflow-auto rounded-sm">
            <div className=" flex justify-end py-2 px-4 ">
              <button onClick={() => setisOpen(!isOpen)} className=" text-2xl">
                <IoMdClose />
              </button>
            </div>
            <ul className=" px-4">
              {menuItems.map((item, index) => (
                <Link
                  to={item.to}
                  onClick={() => setisOpen(!isOpen)}
                  key={index}
                >
                  <li className=" py-5  text-center hover:text-[#42684F]">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
            {user && (
              <div className="block px-2">
                <button
                  onClick={() => {
                    logoutHandler(), setisOpen(!isOpen);
                  }}
                  className=" w-full mb-3 font-semibold bg-brand-green text-white py-4 px-4 rounded-lg "
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HamburgerNavDesktop;
