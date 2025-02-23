import '../App.css';
import {MdOutlineEmail} from "react-icons/md";
import {FaGithubSquare} from "react-icons/fa";

function About(){
    return (
        <div className={"site"}>
            <div className="about">
                <div className={"education"}>
                    <div className={"educationTitle"}>
                        Education
                    </div>
                    <div className={"educationTimelineScroll"}>
                        <div className={"educationTimeline"}>
                            <div className={"educationTimelineContainer"}>
                                <div className={"educationTimelineContent"}>
                                    <div className={"educationTimelineTitle"}>
                                        Bachelor in Information and Cybersecurity
                                    </div>
                                    <div className={"educationTimelineSubtitle"}>
                                        Now
                                    </div>
                                </div>
                            </div>
                            <div className={"educationTimelineContainer"}>
                                <div className={"educationTimelineContent"}>
                                    <div className={"educationTimelineTitle"}>
                                        Swiss Certificate of Competence in Software Development
                                    </div>
                                    <div className={"educationTimelineSubtitle"}>
                                        June 2024
                                    </div>
                                </div>
                            </div>
                            <div className={"educationTimelineContainer"}>
                                <div className={"educationTimelineContent"}>
                                    <div className={"educationTimelineTitle"}>
                                        Professional Baccalaureate in Economics and Law
                                    </div>
                                    <div className={"educationTimelineSubtitle"}>
                                        August 2023
                                    </div>
                                </div>
                            </div>
                            <div className={"educationTimelineContainer"}>
                                <div className={"educationTimelineContent"}>
                                    <div className={"educationTimelineTitle"}>
                                        Graduation of Rangeforce Training in Cybersecurity
                                    </div>
                                    <div className={"educationTimelineSubtitle"}>
                                        July 2023
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"contact"}>
                    <div className={"contactTitle"}>
                        Socials
                    </div>
                    <div className={"contactContent"}>
                        <a rel="noreferrer" href="https://github.com/totoluto" target="_blank" className={"contactLink"}>
                            <div className={"contactIcon"}>
                                <FaGithubSquare/>
                            </div>
                            <div className={"contactIconText"}>
                                totoluto
                            </div>
                        </a>
                        <a href={"mailto:totoluto.development@protonmail.com"} className={"contactLink"}>
                            <div className={"contactIcon"}>
                                <MdOutlineEmail/>
                            </div>
                            <div className={"contactIconText"}>
                                totoluto.development@protonmail.com
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
