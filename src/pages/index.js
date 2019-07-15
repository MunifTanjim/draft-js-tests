import React from "react"
import DraftHookedEditor from "../components/DraftHookedEditor"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DraftHookedEditor />
  </Layout>
)

export default IndexPage
