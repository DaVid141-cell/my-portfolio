import { ScrollAnimation } from "@/components/scroll-animation";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
    return (
        <ScrollAnimation>
        <section id="contact" className="max-w-[1350px] mx-auto px-[20px] py-[75px] mt-70">
            <div>
                <div className="">
                    <h1 className="uppercase font-bold text-4xl">Contact</h1>
                    <p className="my-4 font-medium text-lg">Feel free to reach out to me through the following contact details.</p>
                </div>
                
                <div className="flex justify-between ">
                    <h1 className="font-medium text-3xl">Connect through my Social </h1>
                    <h1 className="font-medium text-3xl">Contact me through Email/Phone </h1>
                </div>
                    
                    <div className="flex row justify-between">
                        
                        <div className="flex-col inline-flex gap-6 text-3xl mt-4 text-background align-text-center ">
                            <div className="row">
                                <a className="border-2 border-light-red rounded-full p-1 hover-effect" href="https://github.com/DaVid141-cell" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a><span className="m-4">GITHUB</span>
                            </div>
                            <div className="row">
                                <a className="border-2 border-light-red rounded-full p-1 hover-effect" href="https://www.linkedin.com/in/david-justin-2092ba37a/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a><span className="m-4">LINKEDIN</span>
                            </div>
                            <div className="row">
                                <a className="border-2 border-light-red rounded-full p-1 hover-effect" href="https://www.facebook.com/seraddavidjustin" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a><span className="m-4">FACEBOOK</span>
                            </div>
                        </div>
                        
                        <div className="flex-col p-12">
                            
                            <p className="text-2xl mb-4">
                                <span className="font-bold ml-1">Email: </span>
                                    chaosdudeserad@gmail.com 
                            </p>
                            <p className="text-2xl mb-4">
                                <span className="font-bold ml-1">Phone: </span>
                                    +63 938 469 8045 
                            </p>
                        </div>
                    </div>
                </div>
        </section>
        </ScrollAnimation>
    )
}