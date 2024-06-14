import React from "react";
import HeaderImage from "../../assets/img/header.png";
import LeftImage from "../../assets/img/image-left.png";
import RightImage from "../../assets/img/image-right.png";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      <img src={HeaderImage} alt="Tradeet Image" className="w-full" />

      <div style={{ marginTop: "43px" }}></div>

      <section className="my-8 text-center">
        <h1 className="md:text-6xl text-2xl">
          <span className="font-semibold text-black">About </span>
          <span className="font-extrabold text-[#42684F]">Tradeet</span>
        </h1>
        <p className="mt-4 md:text-xl text-sm">
          Tradeet is Nigeria’s number one online Shopping destination, that
          offers <br />a personalized shopping and decluttering experience{" "}
        </p>
      </section>

      <div style={{ marginTop: "80px" }}></div>

      <section className="my-8 flex flex-col md:flex-row md:gap-4 items-center justify-center">
        <div className="w-full md:w-1/2 text-center md:text-left lg:text-left mb-4 md:mb-0">
          <h2 className="md:text-[38px] text-2xl font-semibold mb-4">
            Who We Are
          </h2>
          <p className="text-xs md:text-lg">
            Tradeet is Nigeria’s number one marketplace, where personalized
            shopping meets unbeatable prices. We provide a platform for you to
            buy, sell and donate valuables to achieve your desired goal(s). We
            also offer top quality products across different categories like
            fashion, mobile phones, electronics, and home essentials. With
            Tradeet, you can give away your used items and donate to charity.
            Achieve your aims with quality deals at a click!
          </p>
        </div>
        <div className="w-full md:w-1/2 text-center mt-4 md:mt-0">
          <img
            src={LeftImage}
            alt="Image Description"
            className="w-full mx-auto"
          />
        </div>
      </section>

      <div style={{ marginTop: "89px" }}></div>

      <section className="my-8 flex flex-col md:flex-row-reverse md:gap-4 items-center justify-center">
        <div className="w-full md:w-1/2 text-center mt-4 md:mt-0 md:order-2">
          <img
            src={RightImage}
            alt="Image Description"
            className="w-full mx-auto"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left lg:text-left mt-4  md:mb-0 md:order-1">
          <h2 className="md:text-[38px] text-2xl font-semibold mb-4">
            What We Do
          </h2>
          <p className="text-xs md:text-lg">
            Do more with us! We help customers to achieve their buying, selling,
            and donating objectives. Our user-friendly platform guarantees a
            smooth experience through offerings where users can explore their
            interests.
          </p>
        </div>
      </section>

      <div style={{ marginTop: "100px" }}></div>

      <section className="my-32 flex justify-center flex-wrap">
        <div className="md:w-[320px] w-full md:h-[338px] h-72 mx-4 md:border border-y border-[#CCCCCC] mb-4 relative rounded-lg shadow-lg">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-4 left-3"
          >
            <rect width="44" height="44" rx="5.1" fill="#777777" />
            <path
              d="M34 16V31C34 31.4141 33.9038 31.8008 33.7115 32.1602C33.5192 32.5195 33.2548 32.8359 32.9183 33.1094C32.5817 33.3828 32.1875 33.5977 31.7356 33.7539C31.2837 33.9102 30.8077 33.9922 30.3077 34H13.6923C13.1827 34 12.7067 33.9219 12.2644 33.7656C11.8221 33.6094 11.4327 33.3945 11.0962 33.1211C10.7596 32.8477 10.4952 32.5312 10.3029 32.1719C10.1106 31.8125 10.0096 31.4219 10 31V16H13.6923V14.5C13.6923 13.8828 13.8365 13.3008 14.125 12.7539C14.4135 12.207 14.8125 11.7305 15.3221 11.3242C15.8317 10.918 16.4183 10.5977 17.0817 10.3633C17.7452 10.1289 18.4615 10.0078 19.2308 10C20.2308 10 21.1587 10.2031 22.0144 10.6094C22.8702 10.2031 23.7885 10 24.7692 10C25.5288 10 26.2452 10.1172 26.9183 10.3516C27.5913 10.5859 28.1779 10.9102 28.6779 11.3242C29.1779 11.7383 29.5721 12.2148 29.8606 12.7539C30.149 13.293 30.2981 13.875 30.3077 14.5V16H34ZM28.4615 14.5C28.4615 14.0938 28.3654 13.707 28.1731 13.3398C27.9808 12.9727 27.7163 12.6562 27.3798 12.3906C27.0433 12.125 26.649 11.9102 26.1971 11.7461C25.7452 11.582 25.2692 11.5 24.7692 11.5C24.3365 11.5 23.9279 11.5586 23.5433 11.6758C23.8221 11.957 24.0433 12.2344 24.2067 12.5078C24.3702 12.7812 24.4904 13.0547 24.5673 13.3281C24.6442 13.6016 24.6971 13.8789 24.726 14.1602C24.7548 14.4414 24.7692 14.7422 24.7692 15.0625V16H28.4615V14.5ZM15.5385 16H22.9231V14.5C22.9231 14.0938 22.8269 13.707 22.6346 13.3398C22.4423 12.9727 22.1779 12.6562 21.8413 12.3906C21.5048 12.125 21.1106 11.9102 20.6587 11.7461C20.2067 11.582 19.7308 11.5 19.2308 11.5C18.7212 11.5 18.2452 11.5781 17.8029 11.7344C17.3606 11.8906 16.9712 12.1055 16.6346 12.3789C16.2981 12.6523 16.0337 12.9727 15.8413 13.3398C15.649 13.707 15.5481 14.0938 15.5385 14.5V16ZM27.1058 32.5C26.7788 32.0312 26.6154 31.5312 26.6154 31V17.5H11.8462V31C11.8462 31.2109 11.8942 31.4062 11.9904 31.5859C12.0865 31.7656 12.2163 31.9219 12.3798 32.0547C12.5433 32.1875 12.7404 32.2969 12.9712 32.3828C13.2019 32.4688 13.4423 32.5078 13.6923 32.5H27.1058ZM32.1538 17.5H28.4615V31C28.4615 31.2109 28.5096 31.4062 28.6058 31.5859C28.7019 31.7656 28.8317 31.9219 28.9952 32.0547C29.1587 32.1875 29.3558 32.2969 29.5865 32.3828C29.8173 32.4688 30.0577 32.5078 30.3077 32.5C30.5673 32.5 30.8077 32.4609 31.0288 32.3828C31.25 32.3047 31.4423 32.1992 31.6058 32.0664C31.7692 31.9336 31.9038 31.7734 32.0096 31.5859C32.1154 31.3984 32.1635 31.2031 32.1538 31V17.5Z"
              fill="white"
            />
          </svg>
          <div className="ml-3 mt-20">
            <h3 className="text-[16px] font-semibold md:text-2xl">Shop</h3>
            <p className="mt-0.25 md:text-lg text-xs">
              our popular categories include electronics, mobile phones,
              computers, fashion, beauty products, home and kitchen, building
              and construction materials and a whole lot more from premium
              brands.{" "}
            </p>
          </div>
        </div>

        <div className="md:w-[320px] w-full md:h-[338px] mx-4 md:border border-y border-[#CCCCCC] mb-4 relative rounded-lg shadow-lg">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 left-3"
          >
            <rect width="44" height="44" rx="5.1" fill="#777777" />
            <rect
              width="24"
              height="24"
              transform="translate(10 10)"
              fill="#777777"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.0003 11.998L15.7535 12.3885C14.2657 12.4815 12.9531 13.394 12.3477 14.7561L11.8018 15.9844C11.213 17.3093 11.3872 18.8491 12.2571 20.009L12.5154 20.3534L12.8712 28.1816C12.9683 30.3179 14.7285 32 16.8671 32H27.1336C29.2721 32 31.0324 30.3179 31.1295 28.1816L31.4788 20.4965C32.4301 19.6072 32.7807 18.2199 32.324 16.964L31.6115 15.0046C31.0678 13.5095 29.6897 12.4786 28.1019 12.3794L22.0003 11.998ZM14.8691 28.0908L14.5663 21.4287C15.4229 21.5296 16.307 21.3307 17.055 20.832L17.1589 20.7628C17.7236 20.3863 18.4468 20.3413 19.0539 20.6448L20.2115 21.2236C21.3376 21.7867 22.6631 21.7867 23.7892 21.2236L24.9467 20.6448C25.5538 20.3413 26.277 20.3863 26.8418 20.7628L26.9456 20.832C27.6936 21.3307 28.5778 21.5296 29.4343 21.4287L29.1315 28.0908C29.083 29.159 28.2028 30 27.1336 30H25.0871L25.2893 27.5744C25.4496 25.6503 23.9311 24 22.0003 24C20.0695 24 18.551 25.6503 18.7114 27.5744L18.9135 30H16.8671C15.7978 30 14.9177 29.159 14.8691 28.0908ZM28.055 19.1679C28.6275 19.5496 29.3732 19.5496 29.9456 19.1679C30.4425 18.8367 30.6485 18.2087 30.4444 17.6475L29.7319 15.6881C29.4601 14.9405 28.771 14.4251 27.9771 14.3755L22.0003 14.0019L15.8782 14.3846C15.1344 14.4311 14.478 14.8873 14.1753 15.5684L13.6294 16.7967C13.335 17.4591 13.4221 18.229 13.8571 18.809L14.1853 19.2467C14.7373 19.5475 15.4157 19.5212 15.9456 19.1679L16.0495 19.0987C17.2114 18.3241 18.6993 18.2315 19.9483 18.856L21.1059 19.4348C21.669 19.7163 22.3317 19.7163 22.8947 19.4348L24.0523 18.856C25.3013 18.2315 26.7892 18.3241 27.9512 19.0987L28.055 19.1679ZM23.2962 27.4083L23.0802 30H20.9205L20.7045 27.4083C20.6413 26.6502 21.2396 26 22.0003 26C22.7611 26 23.3593 26.6502 23.2962 27.4083Z"
              fill="#F9F9F9"
            />
          </svg>
          <div className="ml-3 mt-20">
            <h3 className="text-[16px] font-semibold md:text-2xl">
              Decluttering
            </h3>
            <p className="mt-0.25 md:text-lg text-xs">
              simplify decluttering process that can manage without relying on
              third party to achieve their goals{" "}
            </p>
          </div>
        </div>

        <div className="md:w-[320px] w-full md:h-[338px] mx-4 md:border border-y border-[#CCCCCC] relative rounded-lg shadow-lg">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 left-3"
          >
            <rect width="40" height="40" rx="5.1" fill="#777777" />
            <g clip-path="url(#clip0_661_4046)">
              <path
                d="M20 28.3332C24.6023 28.3332 28.3333 24.6022 28.3333 19.9998C28.3333 15.3975 24.6023 11.6665 20 11.6665C15.3976 11.6665 11.6666 15.3975 11.6666 19.9998C11.6666 24.6022 15.3976 28.3332 20 28.3332Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 23.3332C21.8409 23.3332 23.3333 21.8408 23.3333 19.9998C23.3333 18.1589 21.8409 16.6665 20 16.6665C18.159 16.6665 16.6666 18.1589 16.6666 19.9998C16.6666 21.8408 18.159 23.3332 20 23.3332Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1085 14.1084L17.6419 17.6417"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3584 22.3584L25.8917 25.8917"
                stroke="#F9F9F9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3584 17.6417L25.8917 14.1084"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.3584 17.6414L25.3001 14.6997"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1085 25.8917L17.6419 22.3584"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_661_4046">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(10 10)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="ml-3 mt-20">
            <h3 className="md:text-2xl text-[16px] font-semibold">Support</h3>
            <p className="mt-0.25 md:text-lg text-xs">
              Our Support Centers are exciting places - dynamic, creative,
              collaborative and very busy
            </p>
          </div>
        </div>
      </section>

      <div style={{ marginBottom: "159px" }}></div>
    </div>
  );
};

export default AboutPage;
