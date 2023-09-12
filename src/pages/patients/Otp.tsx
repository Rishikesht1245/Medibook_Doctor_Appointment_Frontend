import { useParams } from "react-router-dom";
import { patientBgImg } from "../../assets/images/images";
import { IRole } from "../../interfaces/auth";
import { useState } from "react";
import { verifyOtp, resendOtp } from "../../apiRoutes/patient";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { error } from "console";
import LoadingButton from "../../components/UI/LoadingButton";

interface OtpProps {
  role: IRole;
}

const Otp = ({ role }: OtpProps) => {
  // setting the route based on the role of user
  const route = role === "patient" ? "patients" : "hospital-admins";
  const { id } = useParams();

  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isResending, setIsResending] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (
    element: HTMLInputElement,
    index: number
  ): null | void => {
    // if entered value is digit return null
    if (isNaN(Number(element.value))) return null;

    // updating the state
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //focus next input
    const nextSibling = element.nextSibling;
    if (nextSibling && nextSibling instanceof HTMLInputElement) {
      nextSibling.focus();
    }
  };

  // handling the register , will make a post request to the server
  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("otp submit");
    verifyOtp(otp.join(""), id)
      .then((response) => {
        console.log("Response from server:", response);

        if (response.data && response.data.success) {
          console.log("Success");
          navigate(`/${route}/login`);
          return toast.success(response.data.message, {
            style: { background: "rgba(0,0,0,0.9", color: "white" },
          });
        }
      })
      .catch((error) => {
        console.error("Error in otp response:", error);

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message, {
            style: { background: "rgba(0,0,0,0.9)", color: "white" },
          });
        } else {
          console.error("Unexpected error:", error);
          toast.error("An unexpected error occurred.", {
            style: { background: "rgba(0,0,0,0.9)", color: "white" },
          });
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  // handle resend OTP
  const handleResendOtp = () => {
    console.log("Resend OTP");
    setIsResending(true);
    resendOtp(id)
      .then((response) => {
        console.log(response?.data);
        if (response?.data?.success) {
          return toast.success(response.data.message, {
            style: { background: "rgba(0,0,0,0.9", color: "white" },
          });
        }
      })
      .catch((error) => {
        console.error("Error in otp response:", error);

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message, {
            style: { background: "rgba(0,0,0,0.9)", color: "white" },
          });
        } else {
          console.error("Unexpected error:", error);
          toast.error("An unexpected error occurred.", {
            style: { background: "rgba(0,0,0,0.9)", color: "white" },
          });
        }
      })
      .finally(() => setIsResending(false));
  };

  return (
    <div
      style={{
        backgroundImage: `url(${patientBgImg})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center md:bg-center bg-fixed w-full"
    >
      <div className="text-center bg-white lg:p-10 md:p-5 p-3 mx-3 my-[100px] rounded-md shadow-lg">
        <h2 className="text-[24px] leading-[54px] font-[700] text-primary">
          OTP VERIFICATION
        </h2>
        <p className="text-[16px] leading-[30px] font-semibold text-slate-600 mt-[18px]">
          Please enter the OTP sent to your registered email
        </p>

        {/* OTP FORM */}

        {otp.map((data, index) => {
          return (
            <input
              key={index}
              type="text"
              className="w-[50px] h-[50px] border border-solid m-2 my-8 lg text-center px-3 focus:border-slate-500"
              name={`otp${index}`}
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          );
        })}

        {/* buttons */}
        <div className="flex flex-row justify-center gap-3">
          <button
            type="reset"
            className="bg-red-700 text-white text-center rounded-md p-2 px-3 tracking-wider hover:brightness-125 hover:shadow-lg active:shadow-inner active:brightness-100"
            onClick={(e) => setOtp([...otp.map((d) => "")])}
          >
            Clear
          </button>
          {isSubmitting ? (
            <LoadingButton className="px-9" />
          ) : (
            <button
              type="submit"
              className="bg-primary text-white text-center rounded-md p-2 px-3 tracking-wider hover:brightness-125 hover:shadow-lg active:shadow-inner active:brightness-100"
              onClick={(e) => handleSubmit()}
            >
              Verify OTP
            </button>
          )}
        </div>
        <p className="text-[14px] leading-[30px] font-semibold text-slate-600 mt-[18px]">
          Didn't receive the OTP?{" "}
          {isResending ? (
            <span className="text-red-600">resending OTP...</span>
          ) : (
            <button className="text-primary" onClick={(e) => handleResendOtp()}>
              Click here to resend
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Otp;
