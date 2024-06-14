import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../services/features/auth/authSlice";

const HamburgerNav = () => {
  const [isOpen, setisOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      try {
        dispatch(reset());
        dispatch(logout());
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const menuItems = [
    { name: "Wishlist", to: "" },
    { name: "Orders", to: "" },
    { name: "Pending messages", to: "" },
    { name: "Notifications", to: "/notification" },
  ];
  const categories = [
    { name: "Free", to: "" },
    { name: "Phones and tablets", to: "" },
    { name: "Appliances", to: "" },
    { name: "Women's fashion", to: "" },
    { name: "Men's fashion", to: "" },
    { name: "Sports", to: "" },
  ];
  const otherActions = [
    { name: "Become a Tradeet Affliate", to: "" },
    { name: "Sell on Tradeet", to: "" },
    { name: "Donate", to: "/donor" },
    { name: "Contact Us", to: "/contact" },
    { name: "About Us", to: "/about" },
    { name: "Track my Order", to: "/trackOrder" },
  ];

  return (
    <section>
      {!isOpen ? (
        <button
          className="delay-500 transition-all ease-in text-2xl"
          onClick={() => setisOpen(!isOpen)}
        >
          <AiOutlineMenu />
        </button>
      ) : (
        <div className=" h-screen absolute z-30 delay-500 transition-all ease-in">
          <div className=" h-screen z-50 w-[280px] bg-white opacity-100 py-3 overflow-auto fixed top-0 left-0 right-0">
            <div className=" flex justify-end py-2 px-4 ">
              <button onClick={() => setisOpen(!isOpen)} className=" text-2xl">
                <IoMdClose />
              </button>
            </div>
            <Link to="/" className=" text-center text-xl font-semibold pb-3">
              <h2>Tradeet</h2>
            </Link>
            <div className="text-sm ">
              <Link
                to="/contact"
                onClick={() => setisOpen(!isOpen)}
                className=" flex items-center justify-between border border-t-2 border-b-2 border-brand-yellow py-2"
              >
                <span className=" px-4"> Need Help? </span>
                <MdKeyboardArrowRight className=" font-semibold text-xl mr-2" />
              </Link>
              <Link
                onClick={() => setisOpen(!isOpen)}
                className=" py-2 flex items-center justify-between"
              >
                <span className=" px-4">My Account</span>
                <MdKeyboardArrowRight className=" font-semibold text-xl mr-2" />
              </Link>
            </div>
            <ul className=" px-4 py-2 border border-b-2 border-brand-yellow text-sm">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  onClick={() => setisOpen(!isOpen)}
                >
                  <li className=" py-4">{item.name}</li>
                </Link>
              ))}
            </ul>
            <div className=" text-sm flex items-center justify-between px-4 py-2 ">
              <h1>Our categories</h1>
              <Link onClick={() => setisOpen(!isOpen)}>
                <span className=" text-brand-green cursor-pointer">
                  {" "}
                  see all
                </span>
              </Link>
            </div>
            <ul className="text-sm px-4  border border-t-0 border-b-2 border-brand-yellow">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.to}
                  onClick={() => setisOpen(!isOpen)}
                >
                  <li className=" py-4 ">{category.name}</li>
                </Link>
              ))}
            </ul>
            <ul className="text-sm py-2 px-7">
              {otherActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.to}
                  onClick={() => setisOpen(!isOpen)}
                >
                  <li className=" py-4">{action.name}</li>
                </Link>
              ))}
            </ul>

            {user ? (
              <div className="block lg:hidden px-2">
                <button
                  onClick={() => {
                    handleLogout(), setisOpen(!isOpen);
                  }}
                  className=" w-full mb-3 font-semibold bg-brand-green text-white py-2 px-4 rounded-lg text-sm "
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="block lg:hidden px-2">
                <Link onClick={() => setisOpen(!isOpen)} to="/auth">
                  <button className=" w-full mb-3 font-semibold bg-brand-green text-white py-2 px-4 rounded-lg text-sm ">
                    Sign up
                  </button>
                </Link>
                <Link onClick={() => setisOpen(!isOpen)} to="/auth/login">
                  <button className=" w-full font-semibold border border-brand-green text-brand-green py-2 px-4 rounded-lg text-sm">
                    Log In
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HamburgerNav;
