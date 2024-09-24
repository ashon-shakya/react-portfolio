import React from "react";
import { Title } from "./Title";
import Layout from "./Layout";

export const Skill = () => {
    return (
        <Layout>
            <section className="skills" id="skills">
                <Title title="Skills" />

                <div className="container flex skills-container">
                    <div>
                        <i
                            className="fa-brands fa-html5"
                            style={{ color: "orange" }}
                        ></i>
                        <span>HTML</span>
                    </div>
                    <div>
                        <i
                            className="fa-brands fa-css3-alt"
                            style={{ color: "blue" }}
                        ></i>
                        <span>CSS</span>
                    </div>
                    <div>
                        <i
                            className="fa-brands fa-js"
                            style={{ color: "yellow" }}
                        ></i>
                        <span>Javascript</span>
                    </div>
                    <div>
                        <i className="fa-brands fa-github"></i>
                        <span>Github</span>
                    </div>
                    <div>
                        <i
                            className="fa-brands fa-figma"
                            style={{ color: "purple" }}
                        ></i>
                        <span>Figma</span>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
