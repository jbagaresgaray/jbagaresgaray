import React from "react";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import Particles from "react-particles-js";

import "./BannerArea.scss";
import { ParticlesJS_Params } from "../../../constants/Particles";

export default function BannerArea() {
  return (
    <section className="banner-area" id="home">
      <DefaultHeader />
      <div className="container user-info-area">
        <div className="row justify-content-start align-items-center">
          <Particles params={ParticlesJS_Params} />
          <div className="col-lg-4 col-md-12 no-padding"></div>
          <div className="col-lg-8 col-md-12 banner-left">
            <h1 className="text-white">
              Hi, I’m <br />
              <span>Philip Cesar</span> <br />
              Full Stack Web and Mobile Developer
            </h1>
            <p className="mx-auto text-white  mt-20 mb-40">
              Design is not just what it looks like and feels like. Design is
              how it works.
            </p>
            <a href="#contact" className="text-uppercase header-btn">
              Let Us Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
