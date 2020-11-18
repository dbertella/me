import React, { ReactNode } from "react"
import { Box, Card, Flex, Heading, Link, Text } from "theme-ui"

type Props = {
  title: string
  emoji: string
  link: string
  tags: string[]
  sourceLink: string
  children?: ReactNode
}
export const Project = ({
  title,
  emoji,
  link,
  tags,
  sourceLink,
  children,
}: Props) => (
  <Card>
    <Text sx={{ mr: 2, minWidth: 25 }}>{emoji}</Text>
    <Box>
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
      <Box sx={{ flexWrap: "wrap", fontWeight: "bold" }}>
        <Text>
          <Link href={link} target="_blank" rel="noreferrer noopener">
            LINK
          </Link>
        </Text>
        <Text>
          <Link href={sourceLink} target="_blank" rel="noreferrer noopener">
            SOURCE
          </Link>
        </Text>
      </Box>
    </Box>
  </Card>
)
