import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import format from 'date-fns/format';

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

const PostTitle = styled.h2``;

const Post = styled.section``;

function Template({ data }) {
    const { markdownRemark: post } = data;
    return (
        <div>
            <Helmet title={post.frontmatter.title} />
            <article>
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <p>{format(new Date(post.frontmatter.date), 'YYYY MM DD')}</p>
                <Post
                    dangerouslySetInnerHTML={{
                        __html: post.html,
                    }}
                />
            </article>
        </div>
    );
}

export default Template;
