import React from "react"
import DraftEditor from "../components/DraftEditor.js"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <DraftEditor />
  </Layout>
)

export default IndexPage
