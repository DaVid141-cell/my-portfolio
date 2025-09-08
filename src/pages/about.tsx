
import { AboutMe } from "@/components/about-me";
import { Skill } from "@/components/skill";
import { Education } from "@/components/education";

export default function About() {
    return (
        <section id="about" className="max-w-[1350px] mx-auto px-[20px] py-[75px] mt-50">
            <AboutMe/>
            <Education/>
            <Skill/>
            
        </section>
    )
}