import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const DonationCard = (props) => {
  return (
    <div className="lg:w-[340px] sm:w-[300px] w-[180px] md:h-[16rem] rounded border overflow-hidden">
      <div className="overflow-hidden md:h-[10rem] h-[133px]">
        <img src={props.image} className="w-full -z-10" />
      </div>
      <div className="md:p-4 px-2 md:h-[3rem] h-[92px] bg-white flex flex-col gap-2 items-start justify-start">
        <h2 className="font-medium md:text-base text-sm">{props.title}</h2>
        <p className="flex items-center justify-start gap-2 text-[#008000] text-[12px] md:text-sm">
          <IoMdCheckmarkCircleOutline /> Verified {props.type}
        </p>
      </div>
    </div>
  );
};

export default DonationCard;
