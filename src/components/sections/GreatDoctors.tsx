import DoctorList from "./Doctors.jsx/DoctorList";
const GreatDoctors = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text__para text-center">
            Our dedicated team of medical professionals is here to guide you
            toward wellness with expertise, empathy, and unwavering commitment.
          </p>
        </div>

        <DoctorList />
      </div>
    </section>
  );
};
export default GreatDoctors;
