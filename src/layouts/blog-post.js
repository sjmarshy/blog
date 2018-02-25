import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

export const pageQuery = graphql`
    query BPBP($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
                path
                date
            }
        }
    }
`;

const PostTitle = styled.h2`
    font-size: 16px;
    font-family: Monoid-Bold, monospace;
    color: black;
    padding-bottom: 16px;
`;

const Post = styled.section`
    p {
        padding: 16px 0;
    }
`;

function Template({ data }) {
    const { markdownRemark: post } = data;
    return (
        <div>
            <Helmet title={post.frontmatter.title} />
            <div>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <Post
                    dangerouslySetInnerHTML={{
                        __html: post.html,
                    }}
                />
            </div>
        </div>
    );
}

export default Template;
