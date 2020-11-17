import React, { ReactNode } from "react"
import { Card, Flex, Heading, Link, Text } from "theme-ui"

type Props = {
  title: string
  link: string
  tags: string[]
  date: string
  children?: ReactNode
}
export const Article = ({ title, link, tags, date, children }: Props) => (
  <Card variant="compact">
    <Heading as="h3" sx={{ fontSize: 4, mb: 3 }}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        [{date}] {title}
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
  </Card>
)
