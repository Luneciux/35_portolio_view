"use client"

import "./main.scss"

export default function Home() {
  return (
    
    <>
      <div className="main-container flex flex-col w-full justify-center bg-gray-700 pt-3">

        <div className="wrapper wrapper-navbar flex justify-center">
          <div className="section-container flex flex-row justify-center">
            <div className="main-navbar p-3 text-slate-400 text-base backdrop-blur-sm bg-white border-solid border border-slate-100 rounded-full px-12">         
              <nav className="flex gap-5">
                <a href="#cover" rel="noopener noreferrer">Home</a>
                <a href="#intro" rel="noopener noreferrer">Introdução</a>
                <a href="#tecnologias" rel="noopener noreferrer">Tecnologias</a>
                <a href="#projetos" rel="noopener noreferrer">Projetos</a>
                <a href="#estudos-de-caso" rel="noopener noreferrer">Estudos de Casos</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="wrapper wrapper-cover flex justify-center py-14">
          <div className="section-container">
            <section id="cover" className="flex justify-center text-center"> 
              <div className="cover-content-wrapper w-2/4 flex flex-col gap-8">
                <div className="punch-line">
                  <span className="punch-line-text text-5xl">Transformando ideias em soluções digitais eficientes e inovadoras</span>                
                </div>
                <div className="cover-presentation">
                  <span className="cover-presentation-text text-xl">
                    Eaí! Eu sou Josué Eliel, Engenheiro de Sotware e Desenvolvedor.
                  </span>
                </div>
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

        <div className="wrapper wrapper-tecnologias flex justify-center">
          <div className="section-container">
            <section id="tecnologias"> 
              TECNOLOGIAS
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

        <div  className="wrapper wrapper-footer flex justify-center" 
              style={{
                backgroundColor: "black"
              }}
        >
          <div className="section-container">        
            <section id="footer"> 
              FOOTER
            </section>
          </div>
        </div>

        <div  className="wrapper wrapper-footer flex justify-center" 
              style={{
                backgroundColor: "black"
              }}
        >
          <div className="section-container">        
            <section id="copy"> 
              TODOS OS DIREITOS RESERVADOS - JOSUE ELIEL
            </section>
          </div>
        </div>
 
      </div>
    </>
    
  );
}
