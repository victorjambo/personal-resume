import React from 'react';
import { stories } from '../mockApi';

class Experience extends React.Component {
  timelineItems = experiences => experiences.map(experience => (
    <div
      className="mh-work-item dark-bg wow fadeInUp"
      data-wow-duration="0.8s"
      data-wow-delay="0.4s"
    >
      <h4>
        {experience.title}
        {' '}
        <a href="/">{experience.company}</a>
      </h4>
      <div className="mh-eduyear">{experience.company}</div>
      <div className="timeline-post-content" dangerouslySetInnerHTML={{ __html: experience.description }} />
    </div>
  ));

  render() {
    return (
      <section
        className="mh-experince image-bg featured-img-one"
        id="mh-experience"
      >
        <div className="img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3>Work Experience</h3>
                  <div className="mh-experience-deatils">
                    {this.timelineItems(stories.experiences)}
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

export default Experience;
