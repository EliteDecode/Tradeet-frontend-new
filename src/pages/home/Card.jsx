import { Link } from "react-router-dom";
import Arrow from "..//../assets/Arrow.svg";
import CardImg from "..//../assets/Card2.svg";

const cardItem = {
  img: CardImg,
  title: "Register your charity",
  text: "Register with us and access valuable resources to support your cause..",
  icon: Arrow,
};

const Card = () => {
  return (
    <div className="w-full md:px-24 p-4 md:block flex justify-center">
      <div className="w-full my-4 text-3xl font-semibold hidden md:block">
        <div className="">Join The Good Cause</div>
      </div>

      <div className="md:w-full rounded-lg md:h-[484px] h-[345px] w-[382px] mt-4">
        <div
          style={{
            backgroundImage: `url(${cardItem.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="rounded-t-lg w-full md:h-[315px] h-[185px]"
        ></div>

        <div className="w-full flex flex-row rounded-b-lg bg-[#12362A] items-center justify-between text-[#F5F5F5] p-6">
          <span className="w-3/4 lg:w-[60%] ">
            <p className="font-semibold md:text-2xl text-xl leading-[24.38px] capitalize mb-4">
              {cardItem.title}
            </p>
            <p className="text-base leading-[24px] font-normal">
              {cardItem.text}
            </p>
          </span>

          <Link
            to="/auth/DonationAuth"
            className="  flex bg-[#F5F5F5] p-3 items-center justify-center rounded-full"
          >
            <img src={cardItem.icon} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;