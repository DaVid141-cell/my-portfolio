import PageLayout from "@/components/layouts/page-layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
export default function Home() {
    return (
        <PageLayout>
            <section className="flex justify-center align-items-center gap-[8rem] m-15">
                <div className="rounded-full">
                    <img src="public\images\IMG_20241208_172040_025.jpg" className="relative w-400 rounded-[50%]"></img>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-7xl font-bold line-height[1.3]">Hi, It's <span className="text-light-red">David</span>
                    </h1>
                    <h3 className="text-5xl font-blod mb-4">I'm a <span className="text-light-red">Software Developer</span></h3>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi natus, vel tempora at dolor sint error nisi? Labore eos inventore dolor quas voluptatem dicta voluptates eveniet sint iure asperiores!</p>
                    <div className="inline-flex gap-6 text-3xl mt-4 text-background align-text-center ">
                        <a className="border-2 border-light-red rounded-full p-1 hover:text-black hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300" 
                            href=""><FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className="border-2 border-light-red rounded-full p-1 hover:text-black hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300" 
                            href=""><FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className="border-2 border-light-red rounded-full p-1 hover:text-black hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300" 
                            href=""><FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a className="border-2 border-light-red rounded-full p-1 hover:text-black hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300" 
                            href=""><FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <button className="flex border-3 rounded-2xl p-1 font-bold text-lg text-light-red border-light-red w-40 justify-center mt-4 hover:text-white hover:scale-110 hover:-translate-y-1 hover:bg-red-500 hover:shadow-[0_0_25px_red] transition-all duration-300">Contact Me</button>
                </div>
                
            </section>
            
        </PageLayout>
    )
}