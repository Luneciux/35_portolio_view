"use client"

import "./main.scss"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { FaLinkedinIn } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button"
import SkillScroller from "./components/SkillScroller";


export default function Home() {

  return (
    
    <>
      <div className="main-container flex flex-col w-full justify-center bg-woodsmoke-925 pt-3">

        <div className="wrapper wrapper-navbar flex min-[1400px]:justify-center">
          <div className="section-container flex flex-row justify-center max-[1400px]:hidden">
            <div className="main-navbar p-3 text-woodsmoke-50 text-base backdrop-blur-sm bg-woodsmoke-600 border-solid border border-woodsmoke-700 rounded-full px-12">         
              <nav className="flex gap-5 text-sm">
                <a href="#cover" rel="noopener noreferrer" className="hover:text-woodsmoke-300 transition">Home</a>
                <a href="#intro" rel="noopener noreferrer" className="hover:text-woodsmoke-300 transition">Introdução</a>
                <a href="#tecnologias" rel="noopener noreferrer" className="hover:text-woodsmoke-300 transition">Tecnologias</a>
                <a href="#projetos" rel="noopener noreferrer" className="hover:text-woodsmoke-300 transition">Projetos</a>
                <a href="#estudos-de-caso" rel="noopener noreferrer" className="hover:text-woodsmoke-300 transition">Cases</a>
              </nav>
            </div>
          </div>
          <div className="min-[1400px]:hidden flex flex-row justify-start pl-10 pt-5">
            <Sheet>
              <SheetTrigger><IoMenuOutline className="text-4xl text-woodsmoke-200"/></SheetTrigger>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="wrapper wrapper-cover flex justify-center py-14">
          <div className="section-container">
            <section id="cover" className="flex justify-center text-center"> 
              <div className="cover-content-wrapper w-3/4 flex flex-col gap-2 min-[1400px]:pt-32">
                <div className="cover-avatar flex justify-center pb-3">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src="https://avatars.githubusercontent.com/u/39069174?v=4" />
                    <AvatarFallback>JE</AvatarFallback>
                  </Avatar>
                </div>

                <div className="cover-presentation flex flex-col text-woodsmoke-200">
                  <div className="flex justify-center cover-presentation-text min-[1400px]:text-xl">        
                    Eaí, sou Josué Eliel, 
                    <div className="type-animation">
                      <div className="text-animation" />
                      <div className="text-animation-wrapper"> 
                        &nbsp; engenheiro de software e desenvolvedor.
                      </div>
                    </div>
                  </div>
                  {/* <span className="cover-presentation-text text-xl">
                    
                  </span> */}
                </div>

                <div className="punch-line">
                  <span className="punch-line-text min-[1400px]:text-6xl min-[320px]:text-4xl text-woodsmoke-50">Traduzo desafios em soluções funcionais e eficientes.</span>                
                </div>

                <div className="buttons-section flex flex-row justify-center gap-4 pt-10">
                  <Button variant="outline" className="py-5 text-lg rounded-xl">
                    Entre em contato
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full p-5">
                    <FaLinkedinIn />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full p-5">
                    <FaLinkedinIn />
                  </Button>
                </div>

              </div>
            </section>
          </div>
        </div>

        <div className="wrapper wrapper-tecnologias flex justify-center py-28">
          <div className="section-container">
            <section id="tecnologias" className="flex justify-center"> 
              <div className="flex flex-col tec-content-wrapper items-center min-[1400px]:w-3/5 min-[320px]:w-2/4 p-3 gap-4">
                <SkillScroller />                
                <span className="text-woodsmoke-400">principais tecnologias</span>
              </div>
            </section>
          </div>
        </div>

        <div className="wrapper wrapper-intro flex justify-center">
          <div className="section-container"> 
            <section id="intro"> 
              INTRODUCAO + SERVICOS
            </section>
          </div>
        </div>


        <div className="wrapper wrapper-projetos flex justify-center">
          <div className="section-container">
            <section id="projetos"> 
              PROJETOS
            </section>   
          </div>
        </div>

        <div className="wrapper wrapper-estudos flex justify-center">
          <div className="section-container">        
            <section id="estudos-de-caso"> 
              ESTUDOS DE CASO
            </section>
          </div>
        </div>

        <div className="wrapper wrapper-skills flex justify-center">
          <div className="section-container">        
            <section id="skills"> 
              FULL SKILL LISTA
            </section>
          </div>
        </div>

        <div className="wrapper wrapper-certf flex justify-center">
          <div className="section-container">        
            <section id="certf"> 
              CERTIFICADOS
            </section>
          </div>
        </div>

        <div  className="wrapper wrapper-footer flex justify-center">
          <div className="section-container">        
            <section id="footer"> 
              FOOTER
            </section>
          </div>
        </div>

        <div  className="wrapper wrapper-footer flex justify-center bg-gray-950">
          <div className="section-container flex justify-center text-slate-300 py-14">        
            <section id="copy"> 
              <span>
              Josué Eliel © 2025. Todos os direitos reservados. 
              </span>
            </section>
          </div>
        </div>
 
      </div>
    </>
    
  );
}
