import React from "react";
import SocialIcons from "../components/SocialIcons";

class Footer extends React.Component {
  render() {
    return (
      <footer className="mh-footer mh-footer-3" id="mh-contact">
        <div className="container-fluid">
          <div className="row section-separator">
            <div
              className="col-sm-12 section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h3>Contact Me</h3>
            </div>
            <div className="map-image image-bg col-sm-12">
              <div className="container mt-30">
                <div className="row">
                  <div className="col-sm-12 col-md-6 mh-footer-address">
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item dark-bg shadow-1 media wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.2s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-location-arrow" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Address</h4>
                          <address>
                            5th Avenue, 34th floor, <br />
                            New york
                          </address>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.4s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-envelope-o" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Email</h4>
                          <a href="mailto:yourmail@email.com">
                            yourmail@email.com
                          </a>
                          <br />
                          <a href="mailto:yourmail@email.com">
                            yourmail@email.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 xs-no-padding">
                      <div
                        className="mh-address-footer-item media dark-bg shadow-1 wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.6s"
                      >
                        <div className="each-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="each-info media-body">
                          <h4>Phone</h4>
                          <a href="callto:(880)-8976-987">(880)-8976-987</a>
                          <br />
                          <a href="callto:(880)-8976-987">(880)-8976-987</a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                            placeholder="First Name"
                            required
                          />
                        </div>

                        <div className="col-sm-12">
                          <input
                            name="name"
                            className="contact-email form-control"
                            id="L_name"
                            type="text"
                            placeholder="Last Name"
                            required
                          />
                        </div>

                        <div className="col-sm-12">
                          <input
                            name="name"
                            className="contact-subject form-control"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        <div className="col-sm-12">
                          <textarea
                            className="contact-message"
                            id="message"
                            rows="6"
                            placeholder="Your Message"
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
                  <div
                    className="col-sm-12 mh-copyright wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="text-left text-xs-center">
                          <p>Made with <span role="img" aria-label="hearts">💚</span></p>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <SocialIcons className="social-icon"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
