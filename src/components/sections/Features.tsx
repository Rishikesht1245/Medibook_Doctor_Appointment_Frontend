import { Link } from "react-router-dom";
import { featureImg, videoIcon } from "../../assets/images/images";
import { avatarIcon } from "../../assets/icons/icons";

const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between flex-col lg:flex-row">
          {/* Feature Content */}
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text__para">
                1. Schedule the appointment directly
              </li>
              <li className="text__para">
                2. Search for the physician and contact their hospital
              </li>
              <li className="text__para">
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link to="/patients/doctors">
              <button className="btn">Learn more</button>
            </Link>
          </div>
          {/* Features image */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} alt="Feature Image" />
            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-2 lg:pt-4 lg:px-4 lg:pb-[16px] rounded-[10px] shadow-2xl">
              <div className="flex items-center gap-[6px] lg:gap-4">
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-slate-700 font-[600]">
                  Tue , 24
                </p>
                <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-slate-700 font-[600]">
                  10:00 AM
                </p>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-400 rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="Video Icon" />
                </span>
              </div>
              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-indigo-700 font-[500] mt-2 lg:mt-3 rounded-full">
                Consultation
              </div>
              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={avatarIcon} alt="avatar" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-slate-900">
                  Wayne Collins
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
