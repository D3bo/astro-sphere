import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Giovanni De Bona",
  DESCRIPTION: "Blog and portfolio of Giovanni De Bona.",
  AUTHOR: "Giovanni De Bona",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "debona.giovanni@gmail.com",
    HREF: "mailto:debona.giovanni@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "D3bo",
    HREF: "https://github.com/D3bo"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Giovanni De Bona",
    HREF: "https://www.linkedin.com/in/giovanni-de-bona-24953311a/",
  },
  //{ 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

