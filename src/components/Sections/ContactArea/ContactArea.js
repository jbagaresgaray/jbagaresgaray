import React from "react";

export default function ContactArea() {
  return (
    <section className="contact-area section-gap" id="contact">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-20 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">If you need, Just drop me a line</h1>
              <p>Feel free to contact me.</p>
            </div>
          </div>
        </div>
        <div id="success"></div>
        <form
          className="form-area mt-60 contact-form text-right"
          id="myForm"
          noValidate
        >
          <div className="row">
            <div className="col-lg-6 form-group">
              <input
                name="name"
                id="name"
                placeholder="Enter your name"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Enter your name'"
                className="common-input mb-20 form-control"
                required=""
                type="text"
              />
              <input
                name="email"
                id="email"
                placeholder="Enter email address"
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Enter email address'"
                className="common-input mb-20 form-control"
                required=""
                type="email"
              />
              <input
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Enter your subject'"
                className="common-input mb-20 form-control"
                required=""
                type="text"
              />
            </div>
            <div className="col-lg-6 form-group">
              <textarea
                className="common-textarea mt-10 form-control"
                name="message"
                id="message"
                placeholder="Message"
                // onFocus="this.placeholder = ''"
                // onBlur="this.placeholder = 'Message'"
                required=""
              ></textarea>
              <button className="primary-btn mt-20" type="submit">
                Send Message<span className="lnr lnr-arrow-right"></span>
              </button>
              <div className="alert-msg"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
