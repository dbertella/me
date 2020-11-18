import React, { ReactNode } from "react"
import { Box, Card, Flex, Heading, Link, Text } from "theme-ui"

type Props = {
  title: string
  link: string
  tags: string[]
  date: string
  children?: ReactNode
}

export const Article = ({ title, link, tags, date, children }: Props) => (
  <Card>
    <Text sx={{ mr: 2, minWidth: 25 }}>🖋 </Text>
    <Box>
      <Heading as="h3" sx={{ fontSize: 4, mb: 1 }}>
        <Link href={link} target="_blank" rel="noreferrer noopener">
          {title}
        </Link>
      </Heading>
      <Text sx={{ fontSize: 2, mb: 3 }}>{date}</Text>
      {children}
      <Flex sx={{ flexWrap: "wrap" }}>
        {tags.map(tag => (
          <Text key={tag} variant="tag">
            #{tag}
          </Text>
        ))}
      </Flex>
    </Box>
  </Card>
)
