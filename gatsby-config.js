module.exports = {
  siteMetadata: {
    title: "sjm is typing...",
    description: "just another blog",
    siteUrl: "https://blog.sjm.codes"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { path: `${__dirname}/src/pages`, name: "pages" }
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
                {
                  site {
                    siteMetadata {
                      title
                      description
                      siteUrl
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html
                    }
                  ]
                });
              });
            },
            query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt
                            html
                            frontmatter {
                              title
                              date
                              path
                            }
                          }
                        }
                      }
                    }
                  `,
            output: "/rss.xml"
          }
        ]
      }
    }
  ]
};
