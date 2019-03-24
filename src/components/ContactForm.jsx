import React from 'react';

const ContactForm = () => (
  <div
    className="col-sm-12 col-md-6 wow fadeInUp"
    data-wow-duration="0.8s"
    data-wow-delay="0.2s"
  >
    <form
      id="contactForm"
      className="single-form quate-form wow fadeInUp"
      data-toggle="validator"
    >
      <div id="msgSubmit" className="h3 text-center hidden" />
      <div className="row">
        <div className="col-sm-12">
          <input
            name="name"
            className="contact-name form-control"
            id="name"
            type="text"
            placeholder="Name"
            required
          />
        </div>

        <div className="col-sm-12">
          <input
            name="name"
            className="contact-subject form-control"
            id="email"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="col-sm-12">
          <textarea
            className="contact-message"
            id="message"
            rows="6"
            placeholder="Message"
            required
          />
        </div>

        <div className="btn-form col-sm-12">
          <button
            type="submit"
            className="btn btn-fill btn-block"
            id="form-submit"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default ContactForm;
