import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/about"
import Testimonial from "../components/testimonial"

const sobre = () => (
  <Layout>
    <Seo title="Page two" />
    <About />
    <Testimonial />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default sobre
