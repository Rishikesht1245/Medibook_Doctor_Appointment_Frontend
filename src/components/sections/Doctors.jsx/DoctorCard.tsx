import { starIcon } from "../../../assets/icons/icons";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    specialization: string;
    avgRating: number;
    totalRating: number;
    photo: string;
    totalPatients: number;
    hospital: string;
  };
}
const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const {
    name,
    avgRating,
    totalPatients,
    totalRating,
    photo,
    specialization,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="doctor image" />
      </div>

      <h2 className="text-[18px] leading-[30px] lg:text-[24px] lg:leading-9 text-slate-900 font-[700] mt-2">
        {name}
      </h2>

      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-indigo-700 py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-slate-900">
            <img src={starIcon} alt="star" /> {avgRating}
          </span>
          <span>({totalRating})</span>
        </div>
      </div>

      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-slate-900">
            + {totalPatients} Patients
          </h3>
          <p className="text-[14px] leading-6 font-[400] text-slate-700">
            At {hospital}
          </p>
        </div>
        <Link
          to="/patients/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e]  flex items-center justify-center group hover:bg-blue-700 hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};
export default DoctorCard;
