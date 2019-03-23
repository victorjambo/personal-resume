import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <section className="mh-skills" id="mh-skills">
        <div className="home-v-img">
          <div className="container">
            <div className="row section-separator">
              <div className="section-title text-center col-sm-12">
                <h2>Skills</h2>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-skills-inner">
                  <div
                    className="mh-professional-skill wow fadeInUp"
                    data-wow-duration="0.8s"
                    data-wow-delay="0.3s"
                  >
                    <h3>Technical Skills</h3>
                    <div className="each-skills">
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">Javascript</div>
                            <div className="percentagem-num">86%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '86%'}} />
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">Java</div>
                            <div className="percentagem-num">46%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '46%'}} />
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">Python</div>
                            <div className="percentagem-num">38%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '38%'}} />
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">PHP</div>
                            <div className="percentagem-num">17%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '17%'}} />
                          </div>
                        </div>
                      </div>

                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">Python</div>
                            <div className="percentagem-num">38%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '38%'}} />
                          </div>
                        </div>
                      </div>
                      <div className="candidatos">
                        <div className="parcial">
                          <div className="info">
                            <div className="nome">PHP</div>
                            <div className="percentagem-num">17%</div>
                          </div>
                          <div className="progressBar">
                            <div className="percentagem" style={{width: '17%'}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div
                  className="mh-professional-skills wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <h3>Professional Skills</h3>
                  <ul className="mh-professional-progress">
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="95"
                      />
                      <div className="pr-skill-name">Communication</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="55"
                      />
                      <div className="pr-skill-name">Team Work</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="86"
                      />
                      <div className="pr-skill-name">Project Management</div>
                    </li>
                    <li>
                      <div
                        className="mh-progress mh-progress-circle"
                        data-progress="60"
                      />
                      <div className="pr-skill-name">Creativity</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
