import React from 'react';
import { LuShoppingCart, LuTruck } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import HamburgerNav from './HamburgerNav';
import { Avatar } from './Avatar';

 
export const LoginNav = () => {
    
   return (
    <div className=' flex justify-between items-center py-7 px-16'>
        <div className=' w-1/12 flex gap-4 items-center'>
            <HamburgerNav/>
            <h1 className=' text-xl font-semibold'>Tradeet</h1>
        </div>
        <div className=' w-3/5 flex  gap-3 px-4'>
            <span className=' relative left-11 top-3.5 text-xl'> <CiSearch/> </span>
            <input type="search" className=' px-5 pl-10  py-3 bg-brand-yellow rounded-lg text-black w-3/4' placeholder='search products,items and categories' />
            
            <button className=' font-semibold bg-brand-green text-white px-4 rounded-lg '>Search</button>
        </div>
        <div className=' hidden lg:flex w-auto justify-start  items-center gap-4 '>
            <button className=' font-semibold bg-brand-green text-white py-3 px-7 rounded-lg
            hover:bg-pressed-state-green transition-colors duration-500 ease-in-out '>
                Track your Order
            </button>
            <div>
                <LuShoppingCart/>
            </div>
            <Avatar/>
            
            
        </div>
    
    </div>
   )
}

export const MobileLoginNav = () => {
    return (
      <nav className=' py-7 px-5'>
          <div className=' text-2xl flex justify-between mb-2 items-center'>
              <div className=' flex items-center'>
                  <HamburgerNav/>
                  <h1 className=' ml-2 font-semibold'>Tradeet</h1>
              </div>
              <span className=' flex items-center gap-2'>
                <LuTruck/>
                <LuShoppingCart/>
              </span>
          </div>
          <form action="" method="get">
              <input type="search" className=' px-5 py-3 bg-brand-yellow rounded-lg text-black w-full' placeholder='search products,items and categories' />
          </form>
      </nav>
    )
  }
 

 