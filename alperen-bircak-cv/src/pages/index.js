import * as React from "react"
import A4Layout from "../layouts/A4Layout/A4Layout"
import CVPage from "./CVPage/CVPage"
import "../styles/_index.scss"
import "../styles/_text.scss"


const IndexPage = () => {
  return (
      <main >
        <A4Layout>
          <CVPage />
        </A4Layout>
      </main>
  )
}

export default IndexPage

export const Head = () => <title>Index Page</title>
