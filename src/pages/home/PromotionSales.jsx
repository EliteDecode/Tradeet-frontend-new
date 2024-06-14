import { products } from "../../utils/promotionProductData";

import HomeProductsCard from "../../components/HomeProductsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

const PromotionSales = () => {
  const [isclick, setisclick] = useState(true);

  //functions for slider navigations
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`swiper-button-next ${
          isclick ? "bg-[#12362A]" : "bg-[#ADBC9F]"
        } hidden md:block absolute text-center right-0 top-[150px] z-10 hover:bg-[#42684F]`}
        onClick={() => {
          onClick(), setisclick(true);
        }}
      >
        <div
          className="w-full h-full  transform translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <IoIosArrowForward size={20} />
        </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`swiper-button-prev ${
          isclick ? "bg-[#ADBC9F]" : "bg-[#12362A]"
        } hidden md:block absolute left-0 top-[150px] z-10 hover:bg-[#42684F]`}
        onClick={() => {
          onClick(), setisclick(false);
        }}
      >
        <div
          className="w-full h-full  transform translate-x-1/2 -translate-y-1/2"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <IoIosArrowBack size={20} />
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    slidesToShow: 5,
    swipeToSlide: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          swipeToSlide: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          swipeToSlide: true,
          infinite: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
          initialSlide: 2,
          infinite: false,
          nextArrow: false,
          prevArrow: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="md:px-6">
      <div className="flex justify-between items-center bg-[#B40B10] h-[90px] text-white px-8 ">
        <p className="md:text-[28px] text-[24px] font-semibold">
          Promotion Sales
        </p>
        <button className="md:text-[20px] text-[16px] font-semibold">
          See All
        </button>
      </div>

      <div className="h-[360px] relative">
        <div className="mx-auto overflow-hidden">
          <Slider {...settings} className="lg:px-10">
            {products.map((val, i) => (
              <div className="" key={i}>
                <div className="flex justify-center ">
                  <HomeProductsCard
                    name={val.name}
                    image={val.image}
                    price={val.price}
                    username={val.userName}
                    rating={val.rating}
                    profileImg={val.profileImg}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PromotionSales;
