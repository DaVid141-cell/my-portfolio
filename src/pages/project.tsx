import { ScrollAnimation } from "@/components/scroll-animation";

export default function Project() {
    return(
        <section id="projects" className="max-w-[1350px] mx-auto px-[20px] py-[75px] mt-50">
            <ScrollAnimation>
                <div className="">
                        <h1 className="uppercase font-bold text-4xl">Projects</h1>
                        <p className="my-4 font-medium text-lg">Here are some of the projects I've worked on recently.</p>
                    </div>
                
                        <div className="grid grid-cols-2 gap-4 ">
                            <div className="grid grid-cols-subgrid p-4 rounded-lg">
                                <img className="rounded-t-lg" src="images/budo.png"></img>
                                <div className="bg-cus-grey p-2 ">
                                    <h2 className="text-2xl font-bold mb-2">Budo Training Program</h2>
                                    <p className="text-sm">WebSpace is creating a user-friendly website for DoBu Martial Arts to promote its classes, facilities, and memberships while supporting business operations.</p>
                                    <div className="flex flex-row gap-2 my-4">
                                        <a className="button-project">HTML</a>
                                        <a className="button-project">CSS</a>
                                        <a className="button-project">JAVASCRIPT</a>
                                    </div>
                                    <a href="#" target="_blank" className="text-light-red hover:underline mt-2 inline-block">Source Code</a>
                                </div>
                            </div>
                             <div className="grid grid-cols-subgrid p-4 rounded-lg">
                                <img className="rounded-t-lg" src="images/enomy-finance.png"></img>
                                <div className="bg-cus-grey p-2">
                                    <h2 className="text-2xl font-bold mb-2">Enomy Finance</h2>
                                    <p className="text-sm">Enomy-Finances system is a web-based financial platform designed to support both staff and clients by providing secure, user-friendly tools for financial planning, savings, investments, and currency exchange.</p>
                                    <div className="flex flex-row gap-2 my-4 ">
                                        <a className="button-project">JAVA</a>
                                        <a className="button-project">HTML</a>
                                        <a className="button-project">CSS</a>
                                        <a className="button-project">SPRING BOOT</a>
                                        <a className="button-project">MYSQL</a>
                                    </div>
                                    <a href="https://github.com/DaVid141-cell/JavaSpringWeb" target="_blank" className="text-light-red hover:underline mt-2 inline-block">Source Code</a>
                                </div>
                            </div>
                             <div className="grid grid-cols-subgrid p-4 rounded-lg">
                                <img className="rounded-t-lg" src="images/meals-on-wheels.png"></img>
                                <div className="bg-cus-grey p-2">
                                    <h2 className="text-2xl font-bold mb-2">Meals on Wheels</h2>
                                    <p className="text-sm">Meals on Wheels is a charity-based food delivery platform for adults unable to cook, offering location-based menus, rider-assigned deliveries, donor support via PayPal, and full admin oversight.</p>
                                    <div className="flex flex-row gap-2 my-4">
                                        <a className="button-project">Laravel</a>
                                        <a className="button-project">PHP</a>
                                        <a className="button-project">MYSQL</a>
                                        <a className="button-project">React</a>
                                    </div>
                                    
                                    <a href="https://github.com/DaVid141-cell/meals-on-wheels" target="_blank" className="text-light-red hover:underline mt-2 inline-block">Source Code</a>
                                </div>
                            </div>
                             <div className="grid grid-cols-subgrid p-4 rounded-lg col-start-2">
                                <img className="rounded-t-lg" src="images/jumpstart-fashion.png"></img>
                                <div className="bg-cus-grey p-2">
                                    <h2 className="text-2xl font-bold mb-2">Jumpstart Fashion</h2>
                                    <p className="text-sm">Using the Google Gemini API with a Flask backend and React+Vite frontend to auto-generate SEO-friendly product descriptions, improving efficiency, consistency, and customer engagement across stores and online.</p>
                                    <div className="flex flex-row gap-2 my-4">
                                        <a className="button-project">React</a>
                                        <a className="button-project">Geminai API</a>
                                        <a className="button-project">Python</a>
                                        <a className="button-project">REST API</a>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <a className="button-project">typescript</a>
                                    </div>
                                    <a href="https://github.com/DaVid141-cell/ai-product-description" target="_blank" className="text-light-red hover:underline mt-2 inline-block">Source Code</a>
                                </div>
                            </div>
                        </div>
                </ScrollAnimation>
        </section>

    )
}