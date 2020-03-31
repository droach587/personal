// importing a logo SVG and embedding it in JSX
import React from "react"
import SVG from 'react-inlinesvg'
import { StaticQuery, graphql } from "gatsby"

const BrandSvg = () => (
  <StaticQuery
    query={graphql`
      query BssNavLogoQuery {
        file(relativePath: {eq: "brand.svg"}) {
          publicURL
        }
      }
    `}
    render={data => {
      return (
        <SVG className="brand-lead" src={data.file.publicURL} />
      )
    }}
  />
)

export default BrandSvg
