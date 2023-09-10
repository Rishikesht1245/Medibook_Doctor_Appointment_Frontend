import { aboutCardImg, aboutImg } from "../../assets/images/images";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row justify-between">
          {/* ================== About Image ================== */}
          <div className="relative w=3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30] md:right-[-7%] lg:right-[10%]">
              <img src={aboutCardImg} alt="About card" />
            </div>
          </div>

          {/* ================ About content ================ */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              We are proud to be recognized as one of the nation's premier
              platforms for doctor booking. Our app is dedicated to elevating
              healthcare accessibility and patient well-being.
            </p>
            <p className="text__para mt-[30px]">
              Our app's excellence is rooted in a relentless pursuit of quality
              care, innovative technologies, and a deep commitment to enhancing
              the health and lives of our users. With pride.
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
