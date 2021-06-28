/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import vscode from "../../../assets/img/vscode.png";
import sublimetext from "../../../assets/img/sublimetext.png";
import visualstudio2 from "../../../assets/img/visualstudio2.png";
import androidstudio from "../../../assets/img/androidstudio.png";
import XCode from "../../../assets/img/xcode.png";
import Photoshop from "../../../assets/img/photoshop.png";
import AdobeXD from "../../../assets/img/adobe-xd.svg";
import Sketch from "../../../assets/img/sketch.png";
import Invision from "../../../assets/img/invision.svg";

export default function ToolsFeatureArea() {
  return (
    <section className="feature-area pt-100" id="tools">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Tools that I usually use</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={vscode} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Visual Studio Code</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={sublimetext} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Sublime Text</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={visualstudio2} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Visual Studio</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={androidstudio} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Android Studio</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={XCode} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">XCode</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={Photoshop} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Photoshop</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={AdobeXD} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Adobe XD</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={Sketch} alt="" width="125px" />
              </div>
              <h4 className="text-center">
                <a href="#">Sketch</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={Invision} alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Invision</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
