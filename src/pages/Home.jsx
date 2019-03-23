import React from "react";
import SocialIcons from "../components/SocialIcons";
import { userInfo } from "../mockApi";

class Home extends React.Component {
  render() {
    return (
      <section className="mh-home image-bg home-2-img" id="mh-home">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
              <div className="col-sm-6">
                <div className="mh-header-info">
                  <div
                    className="mh-promo wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.1s"
                  >
                    <span>Hello I'm</span>
                  </div>

                  <h2
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.2s"
                  >
                    Victor Mutai
                  </h2>
                  <h4
                    className="wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    {userInfo.title}
                  </h4>

                  <ul>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.4s"
                    >
                      <i className="fa fa-envelope" />
                      <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${userInfo.email}`}>{userInfo.email}</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.5s"
                    >
                      <i className="fa fa-phone" />
                      <a href="callto:">{userInfo.phone}</a>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.6s"
                    >
                      <i className="fa fa-map-marker" />
                      <address>
                        {userInfo.address}
                      </address>
                    </li>
                  </ul>

                  <SocialIcons
                    className="social-icon wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.7s"
                  />

                  </div>
              </div>
              <div className="col-sm-6">
                <div
                  className="hero-img wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.6s"
                >
                  <div className="img-border">
                    <img
                      src={userInfo.pic}
                      alt={userInfo.email}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
