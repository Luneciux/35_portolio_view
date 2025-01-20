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
        { src: FaHtml5, alt: "HTML" },
        { src: FaCss3, alt: "CSS3" },
        { src: FaSass, alt: "Sass" },
        { src: SiNextdotjs, alt: "Next.js" },
        { src: SiTypescript, alt: "Typescript" },
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
          <div className="flex skill-list min-[1400px]:w-full min-[320px]:w-1/4 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="oposite-animation-container flex">

              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start will-change-transform [&_img]:max-w-none [&_li]:mx-4">
                {skills.map((item, index) => {
                  const Item = item.src;
                  return (
                    <>
                      <li key={index}>
                        { <Item className="text-4xl text-woodsmoke-400"/> }
                      </li>
                      <li key={index + "1.5233"}>
                        <FaStar className="text-woodsmoke-800"/>
                      </li>
                    </>
                  )
                })}
              </ul>

              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start will-change-transform [&_img]:max-w-none [&_li]:mx-4"
                aria-hidden="true"
              >
                {skills.map((item, index) => {
                  const Item = item.src;
                  return (
                    <>
                      <li key={index}>
                        { <Item className="text-4xl text-woodsmoke-400"/> }
                      </li>
                      <li key={index + "1.5233"}>
                        <FaStar className="text-woodsmoke-800"/>
                      </li>
                    </>
                  )
                })}
              </ul>

            </div>
          </div>
        </>
    );

}




