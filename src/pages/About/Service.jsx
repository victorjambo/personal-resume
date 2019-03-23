import React from "react";
import Stack from "../../components/Stack";
import { stacks } from "../../mockApi";

class Service extends React.Component {
  render() {
    return (
      <section className="mh-service">
        <div className="container">
          <div className="row section-separator">
            <div
              className="col-sm-12 text-center section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h2>What I do</h2>
            </div>
            <Stack stacks={stacks} />
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
