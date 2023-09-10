import PatientHeader from "../../components/layouts/PatientHeader";
import PatientFooter from "../../components/layouts/PatientFooter";
import { heroImg_1, heroImg_2, heroImg_3 } from "../../assets/images/images";
import { heroIcon_1, heroIcon_2, heroIcon_3 } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/sections/About";
import Services from "../../components/sections/services/Services";
import Features from "../../components/sections/Features";
import GreatDoctors from "../../components/sections/GreatDoctors";
import Faq from "../../components/sections/Faq";
import Testimonials from "../../components/sections/Testimonials";

const Home = () => {
  return (
    <div>
      {/* ============== Header =============== */}
      <PatientHeader />

      {/* ============== Hero section ============= */}
      <section className="hero__section 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =================== HERO CONTENT ================ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[45px] md:leading-[66px] text-black font-[600] md:text-[60px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  We are dedicated to empowering patients to lead healthier,
                  longer lives. Our mission is centered on providing
                  comprehensive healthcare solutions that enhance well-being and
                  longevity.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/*================= HERO COUNTER ====================  */}
              <div className="mt-[30px] lg-mt-[70px] flex flex-col lg:flex-row lg:items-center goa-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellow-600 rounded-full block mt-[-12px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    45+
                  </h2>
                  <span className="w-[100px] h-2 bg-purple-600 rounded-full block mt-[-12px]"></span>
                  <p className="text__para">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[30px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-black">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-indigo-500 rounded-full block mt-[-12px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* =================== HERO RIGHT CONTENT ================ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg_1} alt="Hero image 1" />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg_2}
                  alt="Hero Image 2"
                  className="w-full mb-[30px]"
                />
                <img src={heroImg_3} alt="Hero Image 3" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============== Hero section End ============= */}

      {/* ============== Second Section ================= */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              Word-class care for everyone. Our health system offers unmatched
              expert healthcare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* first grid */}
            <div className="py-[30px] px-5">
              {/* grid image */}
              <div className="flex items-center justify-center">
                <img src={heroIcon_1} alt="Hero Icon 1" />
              </div>
              {/* grid heading */}
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-slate-900 font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[18px] leading-7 text-slate-700 font-[400] mt-4 text-center">
                  Your health is your most valuable possession. Find a doctor
                  who not only treats your symptoms but also cares for your
                  well-being.
                </p>

                <Link
                  to="/patients/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* second grid */}
            <div className="py-[30px] px-5">
              {/* grid image */}
              <div className="flex items-center justify-center">
                <img src={heroIcon_2} alt="Hero Icon 1" />
              </div>
              {/* grid heading */}
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-slate-900 font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[18px] leading-7 text-slate-700 font-[400] mt-4 text-center">
                  Discover health and healing at a location near you. Your
                  journey to wellness begins with finding the right place for
                  care. Choose Medibook.
                </p>

                <Link
                  to="/patients/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            {/* Third grid */}
            <div className="py-[30px] px-5">
              {/* grid image */}
              <div className="flex items-center justify-center">
                <img src={heroIcon_3} alt="Hero Icon 1" />
              </div>
              {/* grid heading */}
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-slate-900 font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[18px] leading-7 text-slate-700 font-[400] mt-4 text-center">
                  Empower yourself with the ability to take charge of your
                  health. Booking an appointment is the first step towards a
                  healthier, happier you.
                </p>

                <Link
                  to="/patients/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181a1e] mt-[30px] mx-auto flex items-center justify-center group hover:bg-blue-700 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============== Second Section End ============= */}

      {/* =============== About Section =============== */}
      <About />

      {/* ============== Services Section ============= */}
      <Services />

      {/* ============== Features Section ============== */}
      <Features />

      {/* ============= Our Great Doctors =============== */}
      <GreatDoctors />

      {/* ============= FAQ Section ======================= */}
      <Faq />

      {/* =================== Testimonial Section ============= */}
      <Testimonials />

      {/* ============== Footer =================== */}
      <PatientFooter />
    </div>
  );
};
export default Home;
