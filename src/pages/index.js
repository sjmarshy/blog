import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <div>
        {edges.map(({ node }) => (
            <Link key={node.frontmatter.path} to={node.frontmatter.path}>
                {new Date(node.frontmatter.date).toDateString()} -{' '}
                {node.frontmatter.title}
            </Link>
        ))}
    </div>
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
