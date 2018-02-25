import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Padded = styled.li`
    padding: 8px 0;
`;

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <ul>
        {edges
            .sort(
                (a, b) =>
                    new Date(b.node.frontmatter.date).valueOf() -
                    new Date(a.node.frontmatter.date).valueOf()
            )
            .map(({ node }) => (
                <Padded key={node.frontmatter.path}>
                    <Link to={node.frontmatter.path}>
                        {new Date(node.frontmatter.date).toDateString()} -{' '}
                        {node.frontmatter.title}
                    </Link>
                </Padded>
            ))}
    </ul>
);

export default IndexPage;
export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        path
                        title
                        date
                    }
                }
            }
        }
    }
`;
