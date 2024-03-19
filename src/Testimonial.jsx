import MaryAnden from "../src/assets/Mary_Anden.png";
const Testimonial = () => {
  return (
    <div className="px-4">
    <div className="flex flex-col items-center justify-center pt-10">
      <h2 className="text-3xl font-bold text-blue-950">Testimonials</h2>
    </div>
    <div className="flex flex-col md:flex-row w-full mx-auto items-center justify-center md:min-h-[150px] bg-blue-950 rounded-2xl mt-6">
      <img
        src={MaryAnden}
        alt="MaryAnden Image"
        width={90}
        className="rounded-full md:ml-3 mb-3 md:mb-0"
      />
      <div className="text-center md:text-left mx-3 md:mr-6">
        <p className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam,
          omnis accusantium dolore nisi fugiat illo doloribus illum pariatur,
          laborum maxime amet. Dolorem, iusto accusamus expedita delectus
          saepe totam ab maxime veniam incidunt consequuntur sequi minima cum,
          mollitia voluptatum, tempora rem!
        </p>
      </div>
    </div>
  </div>

  );
};

export default Testimonial;
