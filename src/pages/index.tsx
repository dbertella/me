/** @jsxRuntime classic */
/** @jsx jsx */

import { graphql, PageProps } from "gatsby"
import { Styled, jsx, Flex, Box, Heading, Link, Grid, Text } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Project } from "../components/project"
import { Article } from "../components/article"
import dayjs from "dayjs"

type Props = {
  allDevArticles: {
    edges: {
      node: {
        article: {
          id: string
          title: string
          tags: string[]
          url: string
          created_at: string
        }
      }
    }[]
  }
}

const Home = ({ data }: PageProps<Props>) => (
  <Layout>
    <SEO title="Daniele Bertella" />
    <Heading as="h1" sx={{ mt: 4, color: "primary", fontWeight: "bold" }}>
      Daniele Bertella 🤘
    </Heading>
    <Text sx={{ fontWeight: 700 }}>
      Javascript Engineer at
      <Link
        href="https://revolut.com"
        target="_blank"
        rel="noreferrer noopener"
        sx={{ ml: 1 }}
      >
        Revolut
      </Link>
      . Based in London, UK
    </Text>
    <Flex sx={{ fontWeight: "bold" }}>
      <Link
        href="https://twitter.com/_denb"
        target="_blank"
        rel="noreferrer noopener"
      >
        Twitter
      </Link>
      <Box sx={{ mx: 2 }}>🤷‍♂️</Box>
      <Link
        href="https://github.com/dbertella"
        target="_blank"
        rel="noreferrer noopener"
      >
        GitHub
      </Link>
    </Flex>
    <Heading as="h2" sx={{ mt: 5, mb: 4, fontWeight: "bold" }}>
      Projects
    </Heading>
    <Grid columns={["auto", null, "1fr 1fr"]}>
      <Project
        title="🚜 cascinarampina.it"
        link="https://cascinarampina.it"
        tags={[
          "nextjs",
          "theme-ui",
          "typescript",
          "vercel",
          "wordpress",
          "woocommerce",
        ]}
        sourceLink="https://github.com/dbertella/cascinarampina"
      />
      <Project
        title="🦖 Hector the little dinosaur"
        link="https://play.google.com/store/apps/details?id=hector.the.little.dinosaur"
        tags={["flutter", "mobile-app", "android", "google-play-store"]}
        sourceLink="https://github.com/dbertella/hector-app"
      />
      <Project
        title="💃🏻 donaflormusic.com"
        link="https://https://donaflormusic.com/"
        tags={["gatsby", "theme-ui", "typescript", "netlify", "netlify-cms"]}
        sourceLink="https://github.com/dbertella/dona-flor"
      />
      <Project
        title="🍴 laruotaimperia.com"
        link="https://laruotaimperia.com"
        tags={["gatsby", "theme-ui", "typescript", "netlify", "netlify-cms"]}
        sourceLink="https://github.com/dbertella/la-ruota"
      />
      <Project
        title="🦕 hector.aureliemercier.com"
        link="https://hector.aureliemercier.com"
        tags={["gatsby", "theme-ui", "netlify"]}
        sourceLink="https://github.com/dbertella/hector"
      />
      <Project
        title="🌵 mandala.ildedalo.com"
        link="https://mandala.ildedalo.com"
        tags={["gatsby", "theme-ui", "netlify"]}
        sourceLink="https://github.com/dbertella/nicomandala"
      />
    </Grid>
    <Heading as="h2" sx={{ mt: 5, mb: 4, fontWeight: "bold" }}>
      Articles
    </Heading>
    {data.allDevArticles.edges.map(
      ({
        node: {
          article: { id, url, title, created_at, tags },
        },
      }) => (
        <Article
          key={id}
          link={url}
          title={title}
          date={dayjs(created_at).format("D MMM")}
          tags={tags}
        />
      )
    )}
  </Layout>
)

export default Home

export const query = graphql`
  query Home {
    allDevArticles(sort: { order: DESC, fields: article___created_at }) {
      edges {
        node {
          article {
            id
            title
            tags
            url
            created_at
          }
        }
      }
    }
  }
`
