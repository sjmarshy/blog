/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const blogPostTemplate = path.resolve('src/layouts/blog-post.js');
    const wordCountTemplate = path.resolve('src/layouts/word-count.js');

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        excerpt(pruneLength: 250)
                        html
                        id
                        wordCount {
                            words
                        }
                        frontmatter {
                            date
                            path
                            title
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(
                result.errors.map(e => e.message).reduce((a, b) => `${a} ${b}`)
            );
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const data = {
                path: node.frontmatter.path,
                component: blogPostTemplate,
                context: {
                    path: node.frontmatter.path,
                },
            };

            createPage(data);
        });

        const totalPublishedWordCount = result.data.allMarkdownRemark.edges
            .map(({ node }) => node.wordCount.words)
            .reduce((a, b) => a + b);

        createPage({
            path: '/wordcount',
            component: wordCountTemplate,
            context: {
                count: totalPublishedWordCount,
            },
        });

        return Promise.resolve();
    });
};
