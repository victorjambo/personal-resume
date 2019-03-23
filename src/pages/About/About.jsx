import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="mh-about" id="mh-about">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 col-md-6">
              <div
                className="mh-about-img shadow-2 wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.4s"
              >
                <img src="assets/images/ab-img.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-about-inner">
                <h2
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  About Me
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  Victor Mutai is a self-motivated and goal oriented individual with the ability to follow through with projects from inception to completion using analytical and problem-solving skills.
                </p>
                <div
                  className="mh-about-tag wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <ul>
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>html</span>
                    </li>
                    <li>
                      <span>css</span>
                    </li>
                    <li>
                      <span>php</span>
                    </li>
                    <li>
                      <span>wordpress</span>
                    </li>
                    <li>
                      <span>React</span>
                    </li>
                    <li>
                      <span>Javascript</span>
                    </li>
                  </ul>
                </div>
                <a
                  href="https://resume.github.io/?victorjambo/"
                  className="btn btn-fill wow fadeInUp"
                  rel="noopener noreferrer"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                  target="_blank"
                >
                  Github Portfolio <i className="fa fa-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
