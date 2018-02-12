import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BigP = styled.p`
    font-size: 88px;
`;

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <div>
        {edges.map(({ node }) => (
            <Link key={node.id} to={node.frontmatter.path}>
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
                    }
                }
            }
        }
    }
`;
