import React from "react";


const Banner = () => {
  return (
    <section>
    <div className="hero min-h-screen">
      <div className="hero-content  flex-col lg:flex-row-reverse">
        <img src="https://img.freepik.com/premium-photo/doctor-research-analysis-diagnose-checking-brain-testing-result-patient-medical-technology_34200-493.jpg?w=1380" className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
            <button className="bg-gradient-to-br from-blue-600 to-cyan-200 px-5 py-3 rounded-md">Get Started</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Banner;
