import Email from "..//../assets/email.png";
import Phone from "..//../assets/phone.png";
import Whatsapp from "..//../assets/whatsapp.svg";
import MainFooter from "./MainFooter";

const Footer = () => {
  const contactOptions = [
    {
      img: Email,
      title: "Email Support",
      text: "helptradeet@gmail.com",
    },
    {
      img: Phone,
      title: "Phone Support",
      text: " 09165498653, <br/>  08043678954",
    },
    {
      img: Whatsapp,
      title: "Whatsapp",
      text: " 09165498653, <br/> 08043678954",
    },
  ];

  return (
    <footer className=" flex flex-col overflow-hidden ">
      {/* Footer-top */}
      <div className="   bg-[#42684F] flex px-4 py-10 flex-col  items-center lg:flex-row lg:w-full lg:justify-between lg:px-16 lg:py-6 ">
        <div className="flex flex-col items-center justify-center ">
          <div className="block   lg:flex lg:flex-row  lg:w-[90vw]  lg:justify-around ">
            <div className="flex flex-row gap-4 items-center justify-center md:mr-6 lg:mr-0  ">
              {contactOptions.map((contact, index) => (
                <div key={index} className="flex flex-row gap-2  items-center">
                  <span className="bg-[#FFFFFF] flex items-center justify-center w-10 h-10 rounded-full ">
                    <img src={contact.img} alt="email" />
                  </span>
                  <div className="hidden lg:flex lg:flex-col lg:visible">
                    <p className="font-semibold text-sm text-[#12362A] leading-[17.07px]">
                      {contact.title}
                    </p>
                    <p
                      className="text-[#FBFADB]  text-xs font-normal leading-[14.63px]"
                      dangerouslySetInnerHTML={{ __html: contact.text }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="block lg:flex lg:flex-row   lg:items-center lg:justify-between">
              <div className="lg:flex lg:flex-col">
                <p className="  hidden lg:flex lg:visible lg:font-semibold lg:text-sm lg:text-[#12362A] ">
                  Want to Sell or Donate?{" "}
                </p>

                <a
                  href="#"
                  className="text-[#FBFADB] text-[15px] font-normal underline my-4 flex flex-cols leading-[18.29px] lg:text-[#FBFADB] lg:my-0 lg:text-xs lg:font-normal lg:leading-[14.63px]"
                >
                  Join highly respected tradeet sellers and donators
                </a>
              </div>

              <div className="subscribe relative w-full rounded lg:pl-20 ">
                <input
                  type="email"
                  placeholder="Email address"
                  className="p-4 relaive rounded-lg text-xs bg-white font-normal w-full  text-[#777777] leading-[14.63px] "
                />
                <button
                  type="submit"
                  className="absolute right-2 bottom-2 top-2 bg-[#12362A] text-[#FFFFFF] font-semibold text-sm px-2 rounded leading-[20.03px] w-"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <MainFooter />
      </div>
    </footer>
  );
};

export default Footer;
