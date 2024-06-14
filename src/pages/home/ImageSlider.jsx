import image1 from "../../assets/image-1-slider.png";
import image2 from "../../assets/image-2-slider.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";

const images = [{ url: image1 }, { url: image2 }];

const ImageSlider = () => {
  const navigate = useNavigate();

  const [slideScreen, setSlideScreen] = useState(null);

  const breakpoint = 768;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };
  
  return (
    <div className=" relative overflow-hidden ">
      <Slider {...settings}>
        {/* first slide */}
        <div>
          <div
            className="bg-cover bg-center text-white w-full md:h-[700px] lg:h-screen h-[250px] flex flex-col items-center justify-center "
            style={{ backgroundImage: `url(${image1})` }}
          >
            <div className=" lg:text-4xl md:text-3xl text-2xl font-bold text-center tracking-wider">
              <div>
                <p className="md:mb-2">
                  Explore Your Options:
                  <span className="bg-[#12362A] border inline-block sm:inline border-white rounded-lg px-2">
                    Free
                  </span>
                </p>
                <p className="md:mb-2">
                  and
                  <span className="bg-[#12362A] border inline-block sm:inline border-white rounded-lg px-2">
                    Premium
                  </span>
                  Products
                </p>
                <p>Await You!</p>
              </div>
              <button
                className=" bg-[#12362A] md:w-full py-2 w-[382px] md:mt-6 mt-4 font-semibold md:text-xl text-sm rounded-lg"
                onClick={() => {
                  navigate("/products");
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>

        {/* second slide */}
        <div>
          <div
            className="bg-cover bg-center text-white w-full md:h-[700px] lg:h-screen h-[250px] flex flex-col items-center justify-center "
            style={{ backgroundImage: `url(${image2})` }}
          >
            <div className=" lg:text-4xl md:text-3xl text-[22px] font-bold text-center tracking-wider">
              <div>
                <p className="md:mb-2">Explore Your Options:</p>
                <p className="md:mb-2">
                  Shop our
                  <span className="bg-[#12362A] border inline-block sm:inline border-white rounded-lg px-2">
                    Promotion Sales
                  </span>
                </p>
                <p>Now!</p>
              </div>
              <button
                className=" bg-[#12362A] md:w-full py-2 w-[382px] md:mt-6 mt-4  font-semibold md:text-xl text-sm rounded-lg"
                onClick={() => {
                  navigate("/promotion");
                }}
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default ImageSlider;
