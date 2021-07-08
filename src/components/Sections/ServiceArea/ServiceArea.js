/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ServiceArea.scss";

import MobileSVG from "../../../assets/svg/undraw_Mobile_application_mr4r.svg";
import WebSVG from "../../../assets/svg/undraw_static_website_0107.svg";
import APISVG from "../../../assets/svg/undraw_programming_2svr.svg";

export default function ServiceArea() {
  return (
    <section className="service-area section-gap" id="service">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Have a Look at my Services</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="single-service col-lg-4 col-md-4 mb-30">
            <div className="icon">
              <img src={WebSVG} alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="#">Web Design and Development</a>
              </h4>
              <p className="mt-20">
                Provide expert web application development and web design
                services to the clients. Offers a variety of website design and
                development services, from creating mobile web development
                solutions and responsive website designs, to building custom
                e-commerce and intranet experiences using the latest and proven
                web technologies.
              </p>
            </div>
          </div>
          <div className="single-service col-lg-4 col-md-4 mb-30">
            <div className="icon">
              <img src={MobileSVG} alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="#">Mobile App Development</a>
              </h4>
              <p className="mt-20">
                Building cross-platform mobile applications that will work on
                any device or platform. Experience also in creating high
                performing, digitally transformative and feature-packed mobile
                applications for all the major mobile platforms including iOS
                and Android. In the future, Im going to add Native App
                development on my services.
              </p>
            </div>
          </div>
          <div className="single-service col-lg-4 col-md-4">
            <div className="icon">
              <img src={APISVG} alt="" />
            </div>
            <div className="dec">
              <h4 className="mt-30">
                <a href="#">Backend and API Development</a>
              </h4>
              <p className="mt-20">
                Provide API development services with tailored results for
                startups and mature organizations. Offers well-organized code
                design with secure authentication that ensures the best
                performance of your web and mobile applications. Ensures
                seamless integration with other parts of your system by strictly
                following REST standards and providing interactive online
                documentation based on Swagger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
