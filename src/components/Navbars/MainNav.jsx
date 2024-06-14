import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";

import HamburgerNav from "./HamburgerNav";
import { LuShoppingCart } from "react-icons/lu";
import { LuTruck } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import HamburgerNavDesktop from "./HamburgerNavDesktop";
import userImg from "../../assets/img/image-left.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MainNav = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className=" flex justify-between items-center py-7 xl:px-16 lg:px-4">
      <div className=" flex gap-4 items-center">
        <HamburgerNavDesktop />
        <Link to="/" className=" text-xl font-semibold">
          Tradeet
        </Link>
      </div>
      <div className="  flex  gap-3 px-4">
        <span className=" relative left-11 top-3.5 text-xl">
          {" "}
          <CiSearch />{" "}
        </span>
        <input
          type="search"
          className=" px-5 pl-10  py-3 bg-brand-yellow rounded-lg text-black lg:w-[325px] xl:w-[360px]"
          placeholder="search products,items and categories"
        />

        <button className=" font-semibold bg-brand-green text-white px-4 rounded-lg py-3">
          Search
        </button>
      </div>
      {user ? (
        <div className="hidden lg:flex gap-2 items-center justify-between ">
          <div className="">
            <button className="font-semibold bg-brand-green text-white px-4 py-3 rounded-lg ">
              Track your order
            </button>
          </div>
          <Link to="/trackOrder">
            <LuShoppingCart />
          </Link>
          <div className="flex items-center gap-1 ">
            <img
              src={userImg}
              alt=""
              className="rounded-full w-[32px] border border-[#12362A] "
            />
            <div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-base  hover:bg-gray-50">
                    Profile
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 "
                      aria-hidden="true"
                    />
                  </MenuButton>
                </div>

                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-5 w-[143px] origin-top-right rounded-md bg-[#FBFADB] text-center shadow-lg px-4 py-2">
                    <div className="py-1">
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            className={classNames(
                              focus ? "bg-[#42684F] text-white " : "text-black",
                              "block px-3 py-2 text-sm rounded-lg"
                            )}
                          >
                            Settings
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            href="#"
                            className={classNames(
                              focus ? "bg-[#42684F] text-white " : "text-black",
                              "block px-3 py-2 text-sm rounded-lg"
                            )}
                          >
                            Notifications
                          </Link>
                        )}
                      </MenuItem>
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      ) : (
        <div className=" hidden lg:flex gap-2 items-center">
          <Link
            to="/auth"
            className=" font-semibold bg-brand-green text-white py-3 px-4 rounded-lg
         hover:bg-secondary-brand-green transition-colors duration-500 ease-in-out "
          >
            Sign up
          </Link>
          <Link
            to="/auth/login"
            className=" font-semibold border border-brand-green text-brand-green py-3 px-4 rounded-lg"
          >
            Log In
          </Link>
          <LuShoppingCart />
        </div>
      )}
    </div>
  );
};

export const MobileMainNav = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className=" py-7 px-5">
      <div className="  flex justify-between mb-2 items-center">
        <div className=" flex items-center">
          <HamburgerNav />
          <Link to="/" className=" ml-2 font-semibold text-xl">
            Tradeet
          </Link>
        </div>
        <div className="flex gap-3">
          {user ? (
            <Link to="/trackOrder">
              <LuTruck className="text-xl" />
            </Link>
          ) : (
            ""
          )}
          <Link>
            <LuShoppingCart className="text-xl" />
          </Link>
        </div>
      </div>
      <form action="" method="get">
        <input
          type="search"
          className=" px-5 py-3 bg-brand-yellow rounded-lg text-black w-full"
          placeholder="search products,items and categories"
        />
      </form>
    </nav>
  );
};
