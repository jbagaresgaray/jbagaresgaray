import React from "react";

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
                <img src="./assets/img/vscode.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Visual Studio Code</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/sublimetext.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Sublime Text</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/visualstudio2.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Visual Studio</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/androidstudio.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Android Studio</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/xcode.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">XCode</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/photoshop.png" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Photoshop</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/adobe-xd.svg" alt="" width="100px" />
              </div>
              <h4 className="text-center">
                <a href="#">Adobe XD</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/sketch.png" alt="" width="125px" />
              </div>
              <h4 className="text-center">
                <a href="#">Sketch</a>
              </h4>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src="./assets/img/invision.svg" alt="" width="100px" />
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
