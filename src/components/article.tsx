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
    <Text sx={{ fontSize: 2 }}>{date}</Text>
    <Heading as="h3" sx={{ fontSize: 4, mb: 2, fontWeight: "bold" }}>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        🖋 {title}
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
