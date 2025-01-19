"use client"

import { FaReact, FaAngular, FaHtml5, FaCss3, FaSass, FaNodeJs, FaDocker, FaStar } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiNextdotjs, SiCypress, SiJavascript } from "react-icons/si";

import "./style.scss"

export default function SkillScroller () {

    const skills = [
        { src: FaReact, alt: "React" },
        { src: FaAngular, alt: "Angular" },
        { src: RiTailwindCssFill, alt: "Tailwind" },
        { src: SiJavascript, alt: "Javascript" },
        { src: SiTypescript, alt: "Typescript" },
        { src: FaHtml5, alt: "HTML" },
        { src: FaCss3, alt: "CSS3" },
        { src: FaSass, alt: "Sass" },
        { src: SiNextdotjs, alt: "Next.js" },
        { src: FaNodeJs, alt: "Node.js" },
        { src: FaDocker, alt: "Docker" },
        { src: SiCypress, alt: "Cypress" },

        // { src: FaReact, alt: "Vue.js" },
        // { src: FaReact, alt: "Shadcn" },
        // { src: FaReact, alt: "Express.js" },
        // { src: FaReact, alt: "JWT" },
        // { src: FaReact, alt: "Bootstrap" },
        // { src: FaReact, alt: "Figma" },
        // { src: FaReact, alt: "User Experience" },
        // { src: FaReact, alt: "SonarQube" },
        // { src: FaReact, alt: "QA" },
        // { src: FaReact, alt: "Git" },
        // { src: FaReact, alt: "Robot Framework" },
        // { src: FaReact, alt: "API" },
        // { src: FaReact, alt: "Mongo DB" },
        // { src: FaReact, alt: "Postgree SQL" },
        // { src: FaReact, alt: "Kotlin" },
        // { src: FaReact, alt: "Android" },
        // { src: FaReact, alt: "Jenkins" },
    ];
    

    return (
        <>
          <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
              {skills.map((item, index) => {
                const Item = item.src;
                return (
                  <>
                    <li key={index}>
                      { <Item className="text-4xl"/> }
                    </li>
                    <li key={index + "1.5233"}>
                      <FaStar className="text-white"/>
                    </li>
                  </>
                )
              })}
            </ul>

            <ul
              className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
              aria-hidden="true"
            >
              {skills.map((item, index) => {
                const Item = item.src;
                return (
                  <>
                    <li key={index}>
                      { <Item className="text-4xl"/> }
                    </li>
                    <li key={index + "1.5233"}>
                      <FaStar className="text-white"/>
                    </li>
                  </>
                )
              })}
            </ul>
          </div>
        </>
    );

}




