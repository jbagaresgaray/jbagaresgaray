import React from "react";

export default function DefaultFooter() {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-5  col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h6>INSPIRATION</h6>
              <p>
                Design is not just what it looks like and feels like. Design is
                how it works.
              </p>
              <p className="footer-text">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-5  col-md-6 col-sm-6"></div>
          <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div className="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="footer-social d-flex align-items-center">
                <a href="https://www.facebook.com/jbagaresgaray">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/Janphil17">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/jbagaresgaray/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://github.com/jbagaresgaray">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://bitbucket.org/jbagaresgaray">
                  <i className="fa fa-bitbucket"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
