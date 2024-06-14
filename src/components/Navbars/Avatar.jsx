import React from 'react'
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp, IoLogOut } from "react-icons/io5";




export const Avatar = () => {
    const [dropDownAvatar , setDropDownAvatar] = React.useState(false)
  return (
    <div className=' flex items-center gap-2'>
        <img alt="tania andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" className="relative inline-block object-cover object-center w-12 h-12 rounded-full cursor-pointer"
        data-popover-target="profile-menu" onClick={()=> setDropDownAvatar((preval)=> !preval)} />
        { dropDownAvatar && <ul role="menu" className=" bg-brand-yellow absolute top-20 right-8  z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md  p-3 font-sans text-sm font-normal text-black shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            <button role="menuitem" className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <FaBell className=' w-4 h-4 text-brand-green'/>
                <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                    Notifications
                </p>
            </button>
            <button role="menuitem" className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <IoSettingsSharp className=' w-4 h-4 text-brand-green'/>
                <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                    Settings
                </p>
            </button >
            <hr className="my-2 border-black" role="menuitem" />
            <button role="menuitem" className=" text-center bg-brand-green rounded-md flex w-full cursor-pointer select-none items-center justify-center gap-2  px-3 pt-[9px] pb-2 leading-tight outline-none transition-all  hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                <IoLogOut  className=' w-4 h-4 text-white'/>
                <p className="block font-sans text-sm text-white antialiased font-bold leading-normal text-inherit">
                    Log out
                </p>
            </button>
           
        </ul> 
        }
        <span>Profile</span>
    </div>
  )
}
