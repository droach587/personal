// importing a logo SVG and embedding it in JSX
import React from "react"
import SVG from 'react-inlinesvg'
import { StaticQuery, graphql } from "gatsby"

const BrandBoldSvg = () => (
  <StaticQuery
    query={graphql`
      query BssNavLogoExpQuery {
        file(relativePath: {eq: "brand-elaborate.svg"}) {
          publicURL
        }
      }
    `}
    render={data => {
      return (
        <SVG className="brand-elaborate" src={data.file.publicURL} />
      )
    }}
  />
)

export default BrandBoldSvg
