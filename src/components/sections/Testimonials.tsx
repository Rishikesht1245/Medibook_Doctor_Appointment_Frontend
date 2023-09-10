import TestimonialList from "./Testimonials/TestimonialList";

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What our patients says</h2>
          <p className="text__para text-center">
            Hear the voices of our valued patients as they share their
            experiences. At Medibook, it's not just about health; it's about the
            people we serve.
          </p>
        </div>

        <TestimonialList />
      </div>
    </section>
  );
};
export default Testimonials;
