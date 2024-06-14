import Facebook from "..//../assets/facebook.png";
import Instagram from "..//../assets/Instagram.png";
import X from "..//../assets/X.png";
import Icon from "..//..//assets/icon.png";

const MainFooter = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    
  }
  const socialicons = [
    {
      src: Facebook,
      alt: "Facebook",
    },
    {
      src: Instagram,
      alt: "Instagram",
    },
    {
      src: X,
      alt: "X",
    },
  ];

  const footerLists = [
    {
      title: "About tradeet",
      items: [
        { text: "about us", link: "#" },
        { text: "contact us", link: "#" },
        { text: "terms & conditions", link: "#" },
        { text: "privacy policy", link: "#" },
      ],
    },
    {
      title: " Buying on Tradeet",
      items: [
        { text: "buyer safety center", link: "#" },
        { text: "delivery", link: "#" },
        { text: "return policy", link: "#" },
        { text: "digital services", link: "#" },
      ],
      style: "mt-10 lg:mt-0",
    },
    {
      title: " More",
      items: [
        { text: "track my order", link: "#" },
        { text: "authentic items policy", link: "#" },
        { text: "become a tradeet affiliate", link: "#" },
        { text: "donate", link: "#" },
      ],
      style: "mt-10 lg:mt-0",
    },
  ];

  return (
    <div className="   bg-[#12362A] flex   flex-col px-4 py-8 lg:flex-row lg:items-center lg:justify-evenly lg:px-0 w-full    ">
      <div className="lg:flex lg:flex-col lg:items-center   justify-between w-full   ">
        <div className=" lg:flex lg:flex-row lg:justify-between  lg:items-start lg:my-10 lg:w-4/5  ">
          {footerLists.map((list, index) => (
            <div className="about flex-col" key={index}>
              <p
                className={`text-lg leading-[21.94px] text-[#FFFFFF] font-semibold mb-4  lg:text-xl lg:leading-[24.38px] lg:mb-6 ${list.style}`}
              >
                {list.title}
              </p>
              <ul className="text-[#FFFFFF] capitalize  font-normal text-sm leading-[17.07px] space-y-4 lg:text-base lg:leading-[19.5px] ">
                {list.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a href={item.link}>{item.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          ;{/* render social icons */}
          <div className=" flex-col">
            <p className="text-lg leading-[21.94px] text-[#FFFFFF] font-semibold mb-4 lg:text-xl lg:leading-[24.38px] lg:mb-6 lg:mt-0 mt-4">
              Connect with Us
            </p>
            <div className="flex gap-4">
              {socialicons.map((icon, iconIndex) => (
                <img key={iconIndex} src={icon.src} alt={icon.alt} />
              ))}
            </div>
          </div>
        </div>

        <div className="  flex mt-16  items-center lg:w-full lg:justify-center  ">
          <div className="flex-1 lg:border-none border-t-[1px] border-white lg:flex-6   "></div>
          <span className=" px-3 text-[#FFFFFF]   text-center font-normal text-sm  leading-[17.07px] ">
            Copyright © 2024 Tradeet.com. <br className="lg:hidden" />
            All right reserved
          </span>
          <div className="flex-1 lg:border-none border-t-[1px] border-white"></div>
        </div>

        <div className='relative w-full' > 
          <div className="absolute right-4 bottom-28 lg:right-16 ">
            <div className=" flex items-end justify-end ">
              <button onClick={top} className=" bg-[#FFFFFF] flex items-center justify-center w-12 h-12 rounded-full ">
                <img src={Icon} alt="email" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
