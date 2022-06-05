import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import EditorialAmbiente from "../components/editorialambiente"
import EditorialCasa from "../components/editorialcasa"

const galeria = () => (
  <Layout>
    <Seo title="Page two" />
    <EditorialAmbiente />
    <EditorialCasa />
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default galeria
