import * as React from "react"
import image1 from "../images/Imagem-1-820x340.jpg"
import image2 from "../images/Imagem-2-542x420.jpg"
import image3 from "../images/Imagem-3-542x420.jpg"

import "./layout.css"

const Gallery = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="lg:w-2/3 mx-auto">
          <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <img
              alt="gallery"
              class="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
              src={image1}
            />
            <div class="text-center relative z-10 w-full">
              <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                SHOOTINGS
              </h2>
              <p class="leading-relaxed">
                {/* Skateboard +1 mustache fixie paleo lumbersexual. */}
              </p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">
                {/* Learn More */}
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg> */}
              </a>
            </div>
          </div>
          <div class="flex flex-wrap -mx-2">
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                  src={image2}
                />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                    LOGOS & IDENTIDADES
                  </h2>
                  <p class="leading-relaxed">
                    {/* Skateboard +1 mustache fixie paleo lumbersexual. */}
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    {/* Learn More */}
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> */}
                  </a>
                </div>
              </div>
            </div>
            <div class="px-2 w-1/2">
              <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block opacity-50 absolute inset-0"
                  src={image3}
                />
                <div class="text-center relative z-10 w-full">
                  <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                    SOCIAL MEDIA
                  </h2>
                  <p class="leading-relaxed">
                    {/* Skateboard +1 mustache fixie paleo lumbersexual. */}
                  </p>
                  <a class="mt-3 text-indigo-500 inline-flex items-center">
                    {/* Learn More */}
                    {/* <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
