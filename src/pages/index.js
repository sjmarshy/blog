import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import format from 'date-fns/format';

const Padded = styled.li``;

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => (
    <div>
        <section>
            <p>
                I'm a software developer writing about anything that pops into
                my head. I don't have a way for you to leave comments, but you
                can send me stuff on{' '}
                <a href="https://twitter.com/sjmarshy">twitter</a> if you really
                need to.
            </p>
        </section>
        <section>
            <h2>posts</h2>
            <ul>
                {edges
                    .filter(post => !post.node.frontmatter.draft)
                    .sort(
                        (a, b) =>
                            new Date(b.node.frontmatter.date).valueOf() -
                            new Date(a.node.frontmatter.date).valueOf(),
                    )
                    .map(({ node }) => (
                        <Padded key={node.frontmatter.path}>
                            <Link to={node.frontmatter.path}>
                                {format(
                                    new Date(node.frontmatter.date),
                                    'YYYY MM DD',
                                )}{' '}
                                - {node.frontmatter.title}
                            </Link>
                        </Padded>
                    ))}
            </ul>
        </section>
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
                        draft
                    }
                }
            }
        }
    }
`;
