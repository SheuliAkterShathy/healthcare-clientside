import React from "react";


const Banner = () => {
  return (
    <section>
    <div className="hero min-h-screen md:mt-12">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img src="https://img.freepik.com/premium-photo/doctor-research-analysis-diagnose-checking-brain-testing-result-patient-medical-technology_34200-493.jpg?w=1380" className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold mt-5">Protect Your Health !!!</h1>
          <p className="py-6">
          Ensuring healthy lives and promoting well-being at all ages is essential to sustainable development.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </p>
            <div className="text-center md:text-start ">
            <button className="bg-gradient-to-br from-blue-600 to-cyan-200 px-5 py-3 rounded-md ">Get Started</button>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
