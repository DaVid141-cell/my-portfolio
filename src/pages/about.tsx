
import { AboutMe } from "@/components/about-me";
import { Skill } from "@/components/skill";
import { Education } from "@/components/education";
import PixelGrid from "@/components/pixel-grid";

export default function About() {
    return (
        <section id="about" className="max-w-[1350px] mx-auto px-[20px] py-[75px] mt-50">
            <AboutMe/>
            <Education/>
            <Skill/>
            <PixelGrid height={800} width={1305} boxSize={45}/>
        </section>
    )
}