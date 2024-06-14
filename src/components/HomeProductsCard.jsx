import React from 'react'
import StarRating from './StarRating';

const HomeProductsCard = ({ name, image, price, username, rating, profileImg }) => {
  return (
    <div className="w-[200px] md:w-[210px] md:h-[300px] min-h-[275px] p-3 shadow-sm md:shadow-lg my-5">
      <div className="w-[192px] h-[152px]">
        <img src={image} alt="" />
      </div>
      <p className="font-semibold text-[12px] mt-4">{name}</p>
      <div className="flex justify-between mt-1">
        <p className="font-semibold text-[16px]">{price}</p>
        <div className="text-sm flex"><StarRating rating={rating}/></div>
      </div>
      <div className="flex justify-between items-center w-[84px] h-[32px] mt-2">
        <div className="rounded-full w-[32px] h-[32px] ">
          <img src={profileImg} alt="" className="w-full" />
        </div>
        <span className="text-[12px] w-1/2">{username}</span>
      </div>
    </div>
  );
};

export default HomeProductsCard
