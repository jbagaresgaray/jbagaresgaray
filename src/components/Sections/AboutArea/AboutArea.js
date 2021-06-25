import React from "react";

export default function AboutArea() {
  return (
    <section className="about-area section-gap" id="about">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">About Myself</h1>
              <p>
                Design is not just what it looks like and feels like. Design is
                how it works.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 about-left">
            <p>
              For the last 8 years, I have developed a wide range of desktop,
              web and mobile applications with backend and API web service using
              cutting-edge tech including applications for startup companies and
              small businesses. My core competency lies in complete end to end
              management of a new application development, and I am seeking
              opportunities to build apps and projects from the ground up for
              you or your business.
            </p>
            <h4 className="pb-40">Tools Expertise</h4>
            <div className="skillbar" data-percent="95%">
              <div className="skill-bar-percent">Ionic Framework 95%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skill-bar-percent">Angular JS 90%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skill-bar-percent">Angular / Typescript 90%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skill-bar-percent">
                Node JS + ExpressJS / NestJS 90%
              </div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="80%">
              <div className="skill-bar-percent">React Native 80%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="70%">
              <div className="skill-bar-percent">React 80%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="70%">
              <div className="skill-bar-percent">VueJS(3) 80%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skill-bar-percent">Ionic Capacitor 90%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="90%">
              <div className="skill-bar-percent">Cordova - Phonegap 90%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="70%">
              <div className="skill-bar-percent">Electron 70%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "70%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="50%">
              <div className="skill-bar-percent">
                PHP Laravel - CodeIgniter 50%
              </div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "50%" }}></div>
              </div>
            </div>
            <div className="skillbar" data-percent="40%">
              <div className="skill-bar-percent">UI / UX 40%</div>
              <div className="skillwrap">
                <div className="skillbar-bar" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 about-right justify-content-end d-flex">
            <div className="myself-wrap">
              <img className="img-fluid" src="./assets/img/about.jpg" alt="" />
              <div className="desc">
                <h4>Philip Cesar Garay</h4>
                <p className="pb-10">Full Stack Web and Mobile App Developer</p>
                <p>
                  <span className="fa fa-skype"></span> pi.philipcesar
                </p>
                <p>
                  <span className="fa fa-linkedin"></span> jbagaresgaray
                </p>
                <p>
                  <span className="fa fa-github"></span> jbagaresgaray
                </p>
                <p>
                  <span className="lnr lnr-envelope"></span>{" "}
                  dev.philipcesar@gmail.com
                </p>
                <a className="mt-30 text-uppercase talk-btn" href="#contact">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
