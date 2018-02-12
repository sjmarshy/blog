import React from 'react';
import Helmet from 'react-helmet';

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

function Template({ data }) {
    const { markdownRemark: post } = data;
    return (
        <div>
            <Helmet title={post.frontmatter.title} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.html,
                    }}
                />
            </div>
        </div>
    );
}

export default Template;
