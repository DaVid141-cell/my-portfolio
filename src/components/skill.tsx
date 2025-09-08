import { ScrollAnimation } from "./scroll-animation"

export const  Skill = () => {
    return(
        <ScrollAnimation>
            <div className="pt-50">
                <div className="justify-center items-center">
                    <div className="flex flex-col items-center justify-center relative mb-[150px]">
                        <button className="inline-block rounded-[6px] border-4 border-[#D65858] bg-black px-[70px] py-[20px] justify-center items-center gap-[10px] text-[25px] font-bold text-gray-300 text-center z-10">
                        MY SKILLS
                        </button>
                        <div className="absolute top-[70px] pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="744" height="423" viewBox="0 0 744 423" fill="none">
                                <path d="M2 126.5V86H258V0M366.5 422.5V0M741.5 133V86H481.5V0" stroke="url(#paint0_linear_2101_768)" strokeWidth="4"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_2101_768" x1="371.963" y1="12" x2="359.62" y2="389.388" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D65858"></stop>
                                        <stop offset="1" stopColor="#3D1919" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            
                <div className="flex flex-col gap-[80px]">
                    <div className="grid grid-cols-2 gap-[100px]">
                        <div className="flex items-start content-start gap-x-[15px] gap-y-[20px] shrink-0 flex-wrap">
                            <button className="button-skill hover-effect">HTML</button>
                            <button className="button-skill hover-effect">CSS</button>
                            <button className="button-skill hover-effect">Javascript</button>
                            <button className="button-skill hover-effect">Java</button>
                            <button className="button-skill hover-effect">Python</button>

                        </div>

                        <div className="flex items-start content-start gap-x-[15px] gap-y-[20px] shrink-0 flex-wrap">
                            <button className="button-skill hover-effect">REST API</button>
                            <button className="button-skill hover-effect">MYSQL</button>
                            <button className="button-skill hover-effect">Spring MVC</button>
                            <button className="button-skill hover-effect">Tailwind CSS</button>
                            <button className="button-skill hover-effect">ReactJS</button>

                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 justify-center items-center">
                        <div className="flex items-start content-start gap-y-[20px] gap-x-[15px] shrink-0 flex-wrap">
                            <button className="button-skill hover-effect">Github</button>
                            <button className="button-skill hover-effect">SDLC</button>
                            <button className="button-skill hover-effect">UI/UX</button>
                        </div>
                        <div className="flex items-start content-start gap-y-[20px] gap-x-[15px] shrink-0 flex-wrap">
                            <button className="button-skill hover-effect">Wireframe</button>
                            <button className="button-skill hover-effect">Adoptive</button>
                            <button className="button-skill hover-effect">Collabrative</button>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}