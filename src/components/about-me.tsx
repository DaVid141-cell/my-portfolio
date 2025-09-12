import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ScrollAnimation } from "./scroll-animation"
import { faTerminal } from "@fortawesome/free-solid-svg-icons"


export const AboutMe = () => {
    return (
        <ScrollAnimation>
            <div className="gap-[8rem] bg-light-dark-red">
                <div className="flex row">
                    <div className="col p-8">
                        <div className="text-4xl font-bold">
                            <h1>About me</h1>
                        </div>
                        <h3 className="text-foreground text-2xl font-bold mt-4">Full Stack Developer</h3>
                        <div className="col">
                            <div className="flex row text-lg">
                                <div className="col py-2 ">
                                    <p><FontAwesomeIcon icon={faTerminal} bounce size="xs" style={{color: "#070708"}}/>
                                    <span className="font-bold ml-1">Age: </span> 
                                        20
                                    </p>
                                    <p><FontAwesomeIcon icon={faTerminal} bounce size="xs" style={{color: "#070708"}}/>
                                        <span className="font-bold ml-1">City: </span> 
                                            Cebu City, Philipines
                                    </p>
                                    <p><FontAwesomeIcon icon={faTerminal} bounce size="xs" style={{color: "#070708"}}/>
                                        <span className="font-bold ml-1">Langunge: </span> 
                                            Engligh / Tagalog / Cebuano 
                                    </p>
                                </div>
                        
                                <div className="relative col py-2 left-20">
                                    <p><FontAwesomeIcon icon={faTerminal} bounce size="xs" style={{color: "#070708"}}/>
                                        <span className="font-bold ml-1">Degree: </span>
                                            BSIT-Software Engineering
                                    </p>
                                    <p><FontAwesomeIcon icon={faTerminal} bounce size="xs" style={{color: "#070708"}}/>
                                        <span className="font-bold ml-1">Email: </span>
                                            chaosdudeserad@gmail.com 
                                    </p>
                                </div>
                            </div>
                            <p className="m-2">
                                As a passionate and a goal-driven lifelong learner, I thrive to learn more about the software development.
                            </p>
                            <p className="m-2"> 
                                Alongside my growing experience in software engineering, I find fulfillment in creating seamless user experiences and continuously improving my ability to design solutions that not only work well but also look and feel engaging.
                                As well as delving into various aspects of software development.
                            </p>
                            <p className="m-2">
                                Motivated to build meaningful projects, gain hands-on experience, and continuously grow as a developer. Dedicated to applying creativity, persistence, and problem-solving skills to deliver quality results.
                        </p>
                        </div>
                    </div>

                    <div className=" flex justify-center items-center">
                        <img className='w-300 p-2'  alt='Picture Not loaded' src="images\IMG_20241208_172040_025.jpg"></img>
                    </div>
                </div>
           </div>
        </ScrollAnimation>
    )
}