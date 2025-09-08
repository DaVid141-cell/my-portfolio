import { ScrollAnimation } from "./scroll-animation"
import StepLine from "./step-line"

export const Education = () => {
    return (
        <ScrollAnimation>

                <div className="pt-50" >
                    <StepLine />
                    <h1 className="uppercase font-bold text-4xl">Education</h1>
                    <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                        <div className="col p-8">
                            <h3>Now</h3>
                        </div>
                        <div className="col p-8">
                            <h1 className="text-2xl">Applied Degree in Software Engineering</h1>
                            <p className="font-medium bg-gradient-to-br from-[#e42828] to-[#e98686] bg-clip-text text-transparent">
                                Lithan Academy Singapore
                            </p>
                        </div>
                    </div>
                    <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                        <div className="col p-8">
                            <h3>Now</h3>
                        </div>
                        <div className="col p-8">
                            <h1 className="text-2xl">Bachelor of science in information technology</h1>
                            <p className="font-medium bg-gradient-to-br from-[#e42828] to-[#e98686] bg-clip-text text-transparent">
                                University of Cebu - Banilad
                            </p>
                        </div>
                    </div>
                    <div className="flex row uppercase items-center font-bold text-lg mt-4 mb-4 border-b-2 border-cus-grey">
                        <div className="col p-3">
                            <h3>2022-2024</h3>
                        </div>
                        <div className="col p-8">
                            <h1 className="text-2xl">Science, Technology, Engineering, and Mathematics (STEM)</h1>
                            <p className="font-medium bg-gradient-to-br from-[#e42828] to-[#e98686] bg-clip-text text-transparent">
                                University of Cebu - Banilad
                            </p>
                        </div>
                    </div>
                </div>
        </ScrollAnimation>
    )
}