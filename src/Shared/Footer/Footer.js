import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
        background: `url('https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?w=1060&t=st=1674165678~exp=1674166278~hmac=764ad785a2352c2b0efaf53195f370271e69124dea5d7e18dded2dba02219bc8')`,
        backgroundSize:'cover'
    }}  className="p-10 mt-12">
      <div className="footer">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </div>
      <p className="text-center mt-32">Copyright © 2023 - All right reserved by HealthCare</p>
    </footer>
  );
};

export default Footer;
