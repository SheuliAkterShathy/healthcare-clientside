
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen text-gray-900">
        <div className="container  flex flex-col items-center justify-center px-5 mx-auto">
          
          <img className="w-[30%]" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7968.jpg?w=826&t=st=1674314720~exp=1674315320~hmac=60611a8d5c50caa9305ed8b09753710f98e05c85d90a5366c1b51cc590ab3ddd" alt="" />
          <div className="max-w-md text-center">
            
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              Sorry, we couldn't find this page.
            </p>
            <Link
              to="/"
              className="px-8 py-3 font-semibold rounded bg-blue-300 text-gray-900"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
