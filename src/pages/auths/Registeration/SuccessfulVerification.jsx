import { Link } from "react-router-dom";

const SuccessfulVerification = () => {
  return (
    <section>
      <div className="flex justify-center items-center my-[4rem]">
        <div
          className="md:border md:border-[#ADBC9F] md:w-[510px]  
					shadow-sm rounded-[8px] p-6"
        >
          <div className="flex justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/6818/0f30/4ab1064732567798f067ec358e2160a9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bvdg38Y2pi0OHx~hre70esAzWLtZtBqzkqnMU-cjk0iPT-ylNW23RtZHDdsuSLmUHyet8HuLSHZNmMD26lQv5pqJp-NmozYgnEDtYsFLR9S68tKDNrxKJKjvE-pp5G8wrH3tDVtpylroIkifr6lTOo-ghWjmTU3eYUccJPYT5~5tvzJFs7lwPdYZPYbAzxHUH99xqJHPsJQf8Uz2O9CU-T1Dp8yKI1LGkbzZbWKCN3Kh1ekTyP8hLpv9uA6K530I6JONvI-66-AQUsuHP2LYzHxg~8HLUppwkiBfmCtNAcNCYnrk~GNJssbJ4K2k9pbLixJcBLT0-LXN0LpEwGmjwA__"
              alt="Sucessfully verified"
              className="w-[250px] h-[250px]"
            />
          </div>
          <div className="flex justify-center items-center -mt-8">
            <p className="md:text-[28px] text-[20px] text-[#2d2d2d] font-semibold">
              Verification Successful!
            </p>
          </div>
          <div className="flex justify-center items-center mt-1">
            <span className="md:text-[16px] text-[14px] text-[#2d2d2d] font-normal text-center">
              You have successfully verified your phone number
            </span>
          </div>

          {/* Login TO Tradeet */}
          <Link to="/auth/login">
            <button className="bg-[#12362a] md:w-[450px] w-full h-[46px] rounded-[8px] mt-6">
              <span className="text-white md:text-[19px] text-[17px] font-semibold leading-[24px]">
                Log in to Tradeet
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessfulVerification;
