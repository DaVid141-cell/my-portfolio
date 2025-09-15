import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { ScrollAnimation } from "@/components/scroll-animation";
import {TypingText} from "@/components/typing-text"
 
export default function Home() {
    return (
        <ScrollAnimation>
            <section id="home" className="max-w-[1350px] mx-auto px-[20px] py-[75px] ">
                <div className="flex justify-center align-items-center gap-[8rem]">  
                    <div className="w-300 ">
                        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 600 450" >
                        
                            <path  className="drop-shadow-[0_0_25px_#ef4444]" d="M45 350 L300 130 L550 350 Z" stroke="#B74B4B" strokeWidth="10" fill="none"/>
                            <image href="images/wowow.png" x="45" y="-27" width="460" height="400"/>
                        </svg>
                    </div>
                    
                    <div className="flex flex-col justify-center">
                        <h1 className="text-7xl font-bold line-height[1.3]">
                            Hi, It's <span className="text-light-red">David</span>
                        </h1>
                        <h3 className="text-5xl font-blod mb-4">
                            I'm a <TypingText text="Full Stack Developer" speed={100} loop={true}/>
                        </h3>
                            <p className="">Every failure is a chance to grow, overcome, and to do better next time. And each setback is not the end, but a lesson that strengthens your skills, builds resilience, and pushes you closer to success.</p>
                        <div className="inline-flex gap-6 text-3xl mt-4 text-background align-text-center ">
                            <a className="border-2 border-light-red rounded-full p-1 hover-effect" 
                                href="https://github.com/DaVid141-cell" target="_blank"><FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className="border-2 border-light-red rounded-full p-1 hover-effect" 
                                href="https://www.linkedin.com/in/david-justin-2092ba37a/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className="border-2 border-light-red rounded-full p-1 hover-effect" 
                                href="https://www.facebook.com/seraddavidjustin"><FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                        <a href="#contact" className="flex border-3 rounded-2xl p-1 font-bold text-lg text-light-red border-light-red w-40 justify-center mt-4 hover:text-white hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>
        </ScrollAnimation>
    )
}