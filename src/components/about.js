import * as React from "react"

import "./layout.css"

const About = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Ingrid Fischer Groh Borges, 30 anos
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Natural de São Paulo Capital, estou em Brusque (SC) desde 2004 e amo
            todo esse toque da colonização alemã nas construções. Trabalho na
            área de Design Gráfico há 10 anos e hoje sou Designer gráfico Sênior
            e redatora + SEO + Social Media na Sly Wear Indústria e Comércio de
            Confecções Ltda. Formada em Deisgn de Moda pela Uniasselvi Assevim,
            atuei também na criação de materiais on e off-line, estratégias e
            campanhas para Facebook e Instagram Ads com o objetivo de tráfego
            pago e branding. Tive o prazer também de trabalhar na construção de
            e-mails marketings e minha paixão que é a criação e alinhamento de
            identidade de editoriais de moda.
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/80x80"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  HARD SKILLS
                </h2>
                <p class="text-gray-500">
                  Photoshop - InDesign - Illustrator - Adobe Premier - Word
                  Press (BLOG) - SEO - Lightroom
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/84x84"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  SOFT SKILLS
                </h2>
                <p class="text-gray-500">
                  Comunicativa - Criativa - Sempre em constante aprendizado -
                  Concentrada - Pro-ativa - Super animada
                </p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/88x88"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                IN PROGRESS
                </h2>
                <p class="text-gray-500">FIGMA - Copyrighting - After Effects</p>
              </div>
            </div>
          </div>
          {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/90x90"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                <p class="text-gray-500">DevOps</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/94x94"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Martin Eden
                </h2>
                <p class="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/98x98"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Boris Kitua
                </h2>
                <p class="text-gray-500">UX Researcher</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/100x90"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Atticus Finch
                </h2>
                <p class="text-gray-500">QA Engineer</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/104x94"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
                <p class="text-gray-500">System</p>
              </div>
            </div>
          </div> */}
          {/* <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/108x98"
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p class="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default About
