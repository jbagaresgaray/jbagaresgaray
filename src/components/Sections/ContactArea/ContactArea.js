import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import $ from "jquery";

export default function ContactArea() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendTo = "philipgaray2@gmail.com";
  const emailSubject = "Website Contact Form: " + name;
  const emailBody =
    "You have received a new message from your website contact form.<br><br>Here are the details:<br><br>Name: " +
    name +
    "<br><br>Email: " +
    email +
    "<br><br>Subject: " +
    subject +
    "<br><br>Message:\n" +
    message;

  const sendMessage = async (ev) => {
    ev.preventDefault();

    try {
      const data = await fetch(
        "https://shoppy-123456789.herokuapp.com/app/1/sendMail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            from: email,
            email: sendTo,
            subject: emailSubject,
            message: emailBody,
          }),
        }
      ).then((response) => response.json());

      console.log("done: ", data);
      if (data.success) {
        // Success message
        $("#success").html("<div class='alert alert-success'>");
        $("#success > .alert-success")
          .html(
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
          )
          .append("</button>");
        $("#success > .alert-success").append(
          "<strong>Your message has been sent. </strong>"
        );
        $("#success > .alert-success").append("</div>");
      } else {
        $("#success").html("<div class='alert alert-danger'>");
        $("#success > .alert-danger")
          .html(
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
          )
          .append("</button>");
        $("#success > .alert-danger").append(
          "<strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong>"
        );

        if (data && data.result) {
          let strErr = "<p></p>";
          for (var i = 0; i < data.result.length; i++) {
            strErr = strErr + "<p>" + data.result[i].msg + "</p>";
          }
          strErr = strErr + "</p>";
          $("#success > .alert-danger").append(
            "<strong>" + strErr + "</strong>"
          );
        }
        $("#success > .alert-danger").append("</div>");
      }
    } catch (error) {
      var err = eval("(" + error.responseText + ")");
      console.log("error: ", err);
      $("#success").html("<div class='alert alert-danger'>");
      $("#success > .alert-danger")
        .html(
          "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
        )
        .append("</button>");
      $("#success > .alert-danger").append(
        "<strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong>"
      );

      if (err && !err.success) {
        if (err && err.result) {
          let strErr = "<p></p>";
          for (var i = 0; i < err.result.length; i++) {
            strErr = strErr + "<p>" + err.result[i].msg + "</p>";
          }
          strErr = strErr + "</p>";
          $("#success > .alert-danger").append(
            "<strong>" + strErr + "</strong>"
          );
        }
      }
      $("#success > .alert-danger").append("</div>");
    }
  };

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
        <Form
          className="form-area mt-60 contact-form text-right"
          id="myForm"
          noValidate
          onSubmit={sendMessage}
        >
          <Row>
            <Col lg={6}>
              <Form.Group>
                <Form.Control
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="common-input mb-20"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  className="common-input mb-20"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="common-input mb-20"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  className="common-textarea mt-10"
                  name="message"
                  id="message"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <button className="primary-btn mt-20" type="submit">
                Send Message<span className="lnr lnr-arrow-right"></span>
              </button>
              <div className="alert-msg"></div>
            </Col>
          </Row>
        </Form>
      </div>
    </section>
  );
}
