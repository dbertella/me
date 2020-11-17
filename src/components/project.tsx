import React, { ReactNode } from "react"
import { Card, Flex, Heading, Link, Text } from "theme-ui"

type Props = {
  title: string
  link: string
  tags: string[]
  sourceLink: string
  children?: ReactNode
}
export const Project = ({ title, link, tags, sourceLink, children }: Props) => (
  <Card>
    <Heading as="h3" sx={{ fontSize: 4, mb: 3 }}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        {title}
      </Link>
    </Heading>
    {children}
    <Flex sx={{ flexWrap: "wrap" }}>
      {tags.map(tag => (
        <Text key={tag} variant="tag">
          #{tag}
        </Text>
      ))}
    </Flex>
    <Flex sx={{ flexWrap: "wrap" }}>
      <Text variant="tag">
        <Link href={link} target="_blank" rel="noreferrer noopener">
          link
        </Link>
      </Text>
      <Text variant="tag">
        <Link href={sourceLink} target="_blank" rel="noreferrer noopener">
          source
        </Link>
      </Text>
    </Flex>
  </Card>
)
