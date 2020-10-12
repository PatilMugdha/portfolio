import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#amazon">Software Engineer at Amazon Web Services</a> <span>June 2020 - Present</span></h2>
                        <p>Working in the DBAA Consoles team at Palo Alto, CA. I began with test automating some features, followed by frontend development. Currently, I am developing a new project from scratch with my team...very excited about the journey! </p>
                      </div>
                    </div>
                    </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="verizon">Data Engineer Intern At Verizon Media</a> <span>Feb 2020 - May 2020</span></h2>
                        <p>Worked in the Big Data and Artificial Intelligence team at the Verizon's Yahoo office. Received hands-on experience with Apache Spark using Scala. My team was incredibly energetic! I am happy to have worked on systems that handle massive amount of data; as well as having learnt from highly skilled, experienced and keen people. An there were perks like awesome food :)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="sap">Blockchain Developer Intern at SAP Labs</a> <span>June 2019 - Dec 2019</span></h2>
                        <p>Worked on a ‘Cross company document sharing and collaboration’ product during Summer 2019 and received Appreciation award for the contribution. SAP has given an excellent opportunity to learn product design, frontend/backend development, DevOps and System Architecture. I was involved in building an on-premise SAP ecosystem for customers. Having an awesome team with interesting conversations during lunch was refreshing.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="teaching">Instructional Assistant at San Jose State University</a> <span>Winter 2018 - 2019</span></h2>
                        <p>Taught Java programming to undergraduate students. This improved my public speaking abilities, so the teaching experience is precious and worthy of mention.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="grad">Graduation at San Jose State University</a> <span>Fall 2018 - Spring 2020</span></h2>
                        <p>I completed my Master's in Computer Science, just to learning new skills, get better at existing ones..and have schooling experience once again!</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="gslab">Software Engineer at GSLab</a> <span>2015 - 2018</span></h2>
                        <p>The company GS Lab uses a "lab to complete solutions approach", by allowing you to explore numerous technologies and exercise complete ownership of the products you work on. I had a beautiful learning experience of working on various Software-as-a-Service projects, that transformed me into a software professional. Loads of coding and fun :)</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="undergrad">Undergraduation at Pune University</a> <span>2011 - 2015</span></h2>
                        <p>Bachelor's in Computer Engineering taught me courses like Data Structures, Object Oriented Programming, Computer Networks, Software Engineering, Databases, etc. Scored First Class with Distinction.</p>
                        <p>Also pursued my interest in Martial Arts during this time.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="bachelors">Higher Education</a> <span>2009 - 2011</span></h2>
                        <p>Completed my higher secondary education with majors Physics, Chemistry & Maths.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
