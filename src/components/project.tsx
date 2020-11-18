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
      <Flex sx={{ fontWeight: "bold", mt: 1 }}>
        <Text>
          <Link href={link} target="_blank" rel="noreferrer noopener">
            link
          </Link>
        </Text>
        <Text mx={2}>&middot;</Text>
        <Text>
          <Link href={sourceLink} target="_blank" rel="noreferrer noopener">
            source
          </Link>
        </Text>
      </Flex>
    </Box>
  </Card>
)
