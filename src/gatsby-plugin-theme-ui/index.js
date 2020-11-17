const pageLink = {
  color: "text",
  textDecoration: "none",
  "&:hover,\n  &:focus,\n  &:active": {
    color: "primary",
  },
}

export default {
  breakpoints: ["25em", "40em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
  fonts: {
    body: "'Asap', sans-serif",
    heading: "'Asap', sans-serif",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  zIndices: [0, 1, 2, 3, 5, 8, 13],
  colors: {
    text: "#333",
    alphaBg: "rgba(64,83,27, 0.7)",
    background: "#fafafa",
    primary: "#000",
    secondary: "#054490",
    muted: "#eaeaea",
    dark: "#40531b",
    light: "#D1DBE8",
  },
  links: {
    pageLink,
  },
  cards: {
    primary: {
      position: "relative",
      padding: 3,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
    compact: {
      mb: 4,
    },
  },
  text: {
    tag: {
      color: "text",
      fontSize: 3,
      ml: 2,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 3,
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [5, null, 6],
    },
    h2: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: [4, null, 5],
    },
    h3: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h4: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h5: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "body",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
    a: pageLink,
    pre: {
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
}
