const query = `
  {
    user(username: "mikaelduru") {
      publication {
        posts {
          slug
          title
          brief
          coverImage
        }
      }
    }
  }
`

export default query;