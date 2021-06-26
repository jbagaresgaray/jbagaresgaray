import React from "react";

import ioniclogo from "../../../assets/img/ioniclogo.png";
import reactnative from "../../../assets/img/reactnative.png";
import react from "../../../assets/img/react.png";
import AngularJS from "../../../assets/img/angular.svg";
import stenciljs from "../../../assets/img/stenciljs.png";
import angular from "../../../assets/img/angular-3.svg";
import vuejs from "../../../assets/img/vuejs.png";
import Capacitor from "../../../assets/img/ionic-capacitor.png";
import Cordova from "../../../assets/img/cordova.png";
import Electron from "../../../assets/img/electron.png";
import MEAN from "../../../assets/img/mean.png";
import nodejs from "../../../assets/img/nodejs.png";
import nest from "../../../assets/img/nest.png";
import Laravel from "../../../assets/img/laravel.png";
import CodeIgniter from "../../../assets/img/codeigniter.png";
import MongoDB from "../../../assets/img/mongodb.svg";
import MySQL from "../../../assets/img/mysql.png";
import MariaDB from "../../../assets/img/mariadb.png";

export default function SkillsFeatureArea() {
  return (
    <section className="feature-area pt-100" id="skills">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Some features that Made me Unique</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="icon text-center">
                <img src={ioniclogo} alt="Ionic Framework" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={reactnative} alt="React Native" width="250px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={react} alt="ReactJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={AngularJS} alt="AngularJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={stenciljs} alt="StencilJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={angular} alt="Angular" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={vuejs} alt="VueJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={Capacitor} alt="Ionic Capacitor" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={Cordova} alt="Cordova" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={Electron} alt="Electron" width="300px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={MEAN} alt="MEAN" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={nodejs} alt="NodeJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={nest} alt="NestJS" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={Laravel} alt="Laravel" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={CodeIgniter} alt="CodeIgniter" width="200px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={MongoDB} alt="MongoDB" width="250px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={MySQL} alt="MySQL" width="250px" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 ">
            <div className="single-feature mb-30">
              <div className="title text-center">
                <img src={MariaDB} alt="MariaDB" width="200px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
