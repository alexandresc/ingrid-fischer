import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import Feature from "../components/feature"
import Content from "../components/content"
import Contactus from "../components/contact-us"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Gallery />
    <Feature />
    <Content />
    <Contactus />
  </Layout>
)

export default IndexPage
