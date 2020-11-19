/** @jsxRuntime classic */
/** @jsx jsx */

import { useStaticQuery, graphql } from "gatsby"
import { jsx } from "theme-ui"
import { Fragment, ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <div
        sx={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
          position: "relative",
        }}
      >
        <main>{children}</main>
        <footer
          sx={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with ❤️
        </footer>
      </div>
    </Fragment>
  )
}

export default Layout
