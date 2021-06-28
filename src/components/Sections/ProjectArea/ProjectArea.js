/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import tms from "../../../assets/projects/img/tms.png";

export default function ProjectArea() {
  return (
    <section className="project-area section-gap" id="project">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-70 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Latest Done Projects</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="http://tms.j3solutions.com.ph/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  J3 TMS - Training Management System
                </a>
              </h4>
              <p className="pb-30">
                It won’t be a bigger problem to find one video game lover in
                your neighbor. Since the introduction of Virtual Game, it has
                been achieving great heights so far as its popularity and
                technological.
              </p>
              <a
                href="http://tms.j3solutions.com.ph/login"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-fluid pb-30" src={tms} alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://github.com/jbagaresgaray/Ionic-Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  Weather App
                </a>
              </h4>
              <p className="pb-30">
                Base on the Uplabs Weather App Challenge by Kenneth Patterson
                (https://www.uplabs.com/pattsyk91). The App is developed using
                Ionic 5. But later will going to release for React Native,
                Flutter and SwiftUI
              </p>
              <a
                href="https://github.com/jbagaresgaray/Ionic-Weather-App"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/weather1.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://github.com/jbagaresgaray/vetzy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vetzy - Pet Care Application by
                </a>
                <a href="https://www.uplabs.com/aravindkumarjeyaraj_ak">
                  Aravind kumar Jeyaraj
                </a>
              </h4>
              <p className="pb-30">
                This is a concept app that is developed using Ionic 4. I give
                credit to the true owner of this app design concept and the
                whole sole purpose of this is just for learning and
                familiarizing Ionic 4.
              </p>
              <img
                className="img-fluid pb-30"
                src="https://raw.githubusercontent.com/jbagaresgaray/vetzy/master/screenshot/preview.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="http://kegitapp.com" target="_blank" rel="noreferrer">
                  Kegit{" "}
                </a>
              </h4>
              <p>
                Scan your kegs to track where they are and what’s in them. When
                they’re empty, you’ll be instantly notified to get them back
                faster so you’ll never lose track of your kegs again.
              </p>
              <a href="http://kegitapp.com" target="_blank" rel="noreferrer">
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/kegit.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="#">Voyaga App</a>
              </h4>
              <p>
                Created using React Native, Nativebase, ReactNavigation, React
                Native Elements
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/voyaga.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="#">Crypto Watcher - Crypto Currency Monitoring</a>
              </h4>
              <p>
                Cryptocurrency App Watcher base on https://coincap.io/ for
                Android and iOS
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/crypto.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://vbeltcalc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  vBelt Calc - Belt Calculator
                </a>
              </h4>
              <p>
                A mobile calculator designed to closely estimate the required
                V-belt length, for two and three pulley applications.
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/beltcalc.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pb-30">
                <a
                  href="https://j3-tms-api.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  J3 EIS - Inspector Mobile App
                </a>
              </h4>
              <p className="pb-30">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, veritatis commodi. Voluptatibus deserunt consequatur
                similique nemo eaque corrupti minima ipsam est aut,
                reprehenderit laborum ea id facilis ex officia quidem!
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/eis.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://itunes.apple.com/us/app/narnoo/id1442057445?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Narnoo Mobile App
                </a>
              </h4>
              <p>
                A business 2 business tourism network, Narnoo allows tourism
                businesses to share their media and product information with
                agents, trade and any one requiring access to their HD media.
                The app is the mobile interface into a business’s Narnoo
                account. Business’s can assign administrator, staff, trade and
                media users access to their business content.
              </p>
              <a
                href="https://itunes.apple.com/us/app/narnoo/id1442057445?mt=8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/narnoo_mobile.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pb-30">
                <a href="#" target="_blank" rel="noreferrer">
                  Narnoo Desktop (Admin & Client)
                </a>
              </h4>
              <p className="pb-30">
                A business 2 business tourism network, Narnoo allows tourism
                businesses to share their media and product information with
                agents, trade and any one requiring access to their HD media.
                The app is the mobile interface into a business’s Narnoo
                account. Business’s can assign administrator, staff, trade and
                media users access to their business content.
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/narnoo_desktop.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://apps.apple.com/nz/app/stars-of-aroha/id1168982009"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stars Of Aroha
                </a>
              </h4>
              <p>
                Stars of Aroha New Zealand Mindfulness & Meditation New Zealand
                mindfulness encourages relaxation and peace through indigenous
                inspired guided meditations. Stars of Aroha is fast becoming New
                Zealand’s #1 bi-cultural mindfulness meditation app
              </p>
              <a
                href="https://apps.apple.com/nz/app/stars-of-aroha/id1168982009"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/stars_of_aroha.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pb-30">
                <a href="#" target="_blank" rel="noreferrer">
                  #Ellerslie
                </a>
              </h4>
              <p className="pb-30">
                Ellerslie app keeps you up to date with all the activity
                throughout Ellerslie. Ellerslie Real Estate Sales, Ellerslie
                business directory and specials, along with upcoming events
                throughout Ellerslie – it’s all here. Ellerslie Real Estate – A
                complete up to date over view of properties sold including land
                size, floor area, and price. Also featured are properties for
                sale in Ellerslie. Ellerslie Business – A directory of local
                Ellerslie businsses including contact details, address and
                specials. Ellerslie Events – Don’t miss a local event again with
                a complete list of all events taking place throughout Ellerslie.
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/ellerslie.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://itunes.apple.com/mk/app/rosmini/id804166760?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rosmini
                </a>
              </h4>
              <p>
                Rosmini College is affirmed as one of Auckland’s leading
                achievers: This includes academic and sporting prowess. Music
                and Art continue to flourish. Rosmini delivers to boys a wide
                range of learning opportunities and maintains a commitment to
                enhancing leadership and community service awareness. It has a
                very positive tone, centred around good leadership, sound
                discipline, excellence in standards expected of all, and a focus
                on boys’ learning.
              </p>
              <a
                href="https://itunes.apple.com/mk/app/rosmini/id804166760?mt=8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/rosmini.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pb-30">
                <a
                  href="https://itunes.apple.com/mk/app/stamp/id1080172237?mt=8"
                  target="_blank"
                  rel="noreferrer"
                >
                  STAMP
                </a>
              </h4>
              <p className="pb-30">
                STAMP your virtual coffee card at participating cafes to earn
                loyalty points and redeem for free rewards. Need a way to
                combine your rewards cards from all your favourite cafe's? STAMP
                frees up wallet space and makes collecting and redeeming rewards
                easy and simple. Are you an interested cafe looking for a modern
                way to replace traditional coffee cards? STAMP will take away
                the pain of having new cards continuously printed and frees up
                crucial time for staff managing the old cards.
              </p>
              <a
                href="https://itunes.apple.com/mk/app/stamp/id1080172237?mt=8"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pb-30"
                  src="./assets/projects/img/stamp.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6 project-right">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a href="#">Newsica - News App</a>
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo, veritatis commodi. Voluptatibus deserunt consequatur
                similique nemo eaque corrupti minima ipsam est aut,
                reprehenderit laborum ea id facilis ex officia quidem!
              </p>
              <img
                className="img-fluid pb-30"
                src="https://cdn.dribbble.com/users/914722/screenshots/3262911/attachments/700971/newsica-detail-view-all.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 project-left">
            <div className="single-project">
              <h4 className="pt-30 pb-30">
                <a
                  href="https://github.com/jbagaresgaray/ionic-flappybird"
                  target="_blank"
                  rel="noreferrer"
                >
                  Floppy Bird
                </a>
              </h4>
              <p className="pb-30">
                A Flappy Bird Clone using Ionic 4... Just all folks
              </p>
              <img
                className="img-fluid pb-30"
                src="./assets/projects/img/flappy-bird.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
