import * as React from "react"

import "./layout.css"

const Testimonial = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/302x302"
              />
              <p class="leading-relaxed">
                Ingrid é uma profissional incrível, Criativa e pro-ativa.
                Trabalhar com ela é ter a certeza que todos os projetos
                receberão uma incrível arte, valorizando o produto e a campanha.
                Além de excelente redatora e social mídia. Não posso esquecer de
                mencionar o bom humor dela. Ingrid está sempre disposta a ajudar
                à todos.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Juliana Maurici Montibeller Lima
              </h2>
              <p class="text-gray-500">
                Ecommerce Sly Wear Ind. e Comércio de Confecções Ltda
              </p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/300x300"
              />
              <p class="leading-relaxed">
                Ingrid é uma profissional com excelente conhecimento sobre funil
                de venda e comportamento do consumidor, traduzindo isso com
                maestria em toda a criação de peças para marketing e
                estruturação de campanhas digitais. Possui um vasto conhecimento
                sobre design thinking trazendo diversas vezes soluções
                fantásticas amarrando todo o conhecimento teórico com o dia a
                dia dos setores. Uma pessoa alegre e animadora, trazendo leveza
                para dentro do ambiente de trabalho.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Frank Groh Borges{" "}
              </h2>
              <p class="text-gray-500">
                APM | PO | Yellow Belt Six Sigma | IPOF | ISMF | IATF | SFC
              </p>
            </div>
          </div>
          <div class="lg:w-1/3 lg:mb-0 p-4">
            <div class="h-full text-center">
              <img
                alt="testimonial"
                class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://dummyimage.com/305x305"
              />
              <p class="leading-relaxed">
                Ingrid é uma facilitadora. A organização e a habilidade em lidar
                com o cronograma, administrar o tempo e servir os integrantes
                dentro de um set. Fica bem fácil produzir uma campanha de
                qualidade.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                Thiago Andrade
              </h2>
              <p class="text-gray-500">Videomaker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
