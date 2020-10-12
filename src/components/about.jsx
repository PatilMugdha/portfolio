import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">Who am I?</span>
                                            <h2 className="colorlib-heading">Introducing myself</h2>
                                            <p>I am a Computer Science Graduate and a Software Engineer who is passionate about the development and ownership of products. My areas of interest include software designing, programming and product management.</p>
                                            <p>For being a Software Architect in near future, I am playing diverse roles at work, developing excellent problem-solving skills and gaining deeper business insights. Right opportunities and exposure to a wide technology landscape for 3+ years has given me the confidence to take up newer challenges and evolve as a versatile professional.</p>
                                            <p>Connecting with new people from different domains and the exchange of novel ideas is something I look forward to, for an enriching learning experience. These ideas inspire me to build a better world!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Areas of expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-globe" />
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>Experience in frontend development using JavaScript, HTML, CSS, Ember.js, React.js</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-code" />
                                    </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>Sound knowledge of Data Structures and CS fundamentals</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-book" />
                                    </span>
                                    <div className="desc">
                                        <h3>Blockchain</h3>
                                        <p>Ethereum DApps, Multichain, HyperLedger</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2" />
                                    </span>
                                    <div className="desc">
                                        <h3>Backend and Frameworks</h3>
                                        <p>Java, Python, Scala, Java Spring, Node.js, Apache Spark, Junit, Shell Scripting, Selenium</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data" />
                                    </span>
                                    <div className="desc">
                                        <h3>Databases</h3>
                                        <p>MySQL, PostGreSQL, JDBC, Hibernate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc">
                                        <h3>Tools and Collaboration</h3>
                                        <p>Elasticsearch-Logstash-Kibana stack, Apache Kafka, Github, Scrum, JIRA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-heart" />
                                    </span>
                                    <div className="desc">
                                        <h3>Anthropology, Archaeology, Astronomy, Spiritual Sciences</h3>
                                        <p> and exploration of things that defy conventional thought. They inspire me to be an Ancient Astronaut Theorist :P</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-heart" />
                                    </span>
                                    <div className="desc">
                                        <h3>Arts, Music, and Sports</h3>
                                        <p>Painting, sketching, writing blogs, some news...</p>
                                        <p>Swimming, skating, table tennis, martial arts...and piano :)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
