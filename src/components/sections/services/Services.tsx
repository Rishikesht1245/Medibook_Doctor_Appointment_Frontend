import ServiceList from "./ServiceList";

const Services = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our medical services</h2>
          <p className="text__para text-center">
            Your health is our priority. We are dedicated to providing you with
            the highest quality medical services.
          </p>
        </div>

        <ServiceList />
      </div>
    </section>
  );
};
export default Services;
