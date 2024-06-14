import { Link } from "react-router-dom";
import { data } from "./data";
import Card from "./Card";

const OngoingFundraising = () => {
  return (
    <div className="md:max-w-[1100px] bg-white mx-auto ">
      {/* Outgoing Fundraising heading starts */}
      <div className="h-[116px] w-[100%] flex justify-between md:px-10 pt-[56px] px-4 pb-[20px] ">
        <h2 className="text-xl font-semibold ">Outgoing Fundraising</h2>
        <Link to="/donation/all" className="underline text-[#42684F] text-sm ">
          See More
        </Link>
      </div>
      {/* Outgoing Fundraising heading ends*/}

      {/* Outgoing Fundraising body starts*/}
      <div className="md:max-w-[1100px] px-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.slice(0, 3).map((val) => (
          <Card val={val} key={val.id} />
        ))}
      </div>
      {/* Outgoing Fundraising body ends*/}
    </div>
  );
};

export default OngoingFundraising;
