import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import monoidBold from '../fonts/Monoid-Bold.ttf';
import monoidItalic from '../fonts/Monoid-Italic.ttf';
import monoid from '../fonts/Monoid-Regular.ttf';

injectGlobal`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
    font-family: Monoid-Regular, monospace;
    src: url(${monoid});
    font-weight: 400;
}

@font-face {
    font-family: Monoid-Bold;
    src: url(${monoidBold});
    font-weight: 500;
}

@font-face {
    font-family: Monoid-Italic;
    src: url(${monoidItalic});
    font-weight: 400;
}

h1,h2,h3,h4,h5,h6 {
    font-family: Monoid-Regular, monospace;
}

body {
    padding: 20px 25px;
    font-size: 16px;
    color: #6D6D6D;
    font-family: 'Merriweather', Georgia, Cambria, Times, serif !important;
    line-height: 1.2rem;
    letter-spacing: 0.03rem;
}

a {
    color: #3f51b5;
}

a:visited {
    color: #00bcd4;
}

code, pre {
    background-color: #37474F;
    color: #EEEEEE;
    padding: 3px;
}

a code {
    color: #B3E5FC;
}
`;

const PageWrapper = styled.div``;

const TitleLink = styled(Link)`
    text-decoration: none;
`;

const Title = styled.h1`
    font-size: 24px;
    font-family: Monoid-Bold, monospace;
    color: #ff5722;
    padding-bottom: 32px;
`;

const Posts = styled.div`
    a {
        font-size: 16px;
    }
`;

const TemplateWrapper = ({ children }) => (
    <PageWrapper>
        <Helmet
            title="sjm is typing..."
            meta={[
                { name: 'description', content: 'The blog of Sam Marshall' },
            ]}
        >
            <link
                href="https://fonts.googleapis.com/css?family=Merriweather"
                rel="stylesheet"
            />
        </Helmet>
        <TitleLink to="/">
            <Title>"sjm is typing..."</Title>
        </TitleLink>
        <h4>
            (A Blog by <a href="https://sjm.computer">Sam Marshall</a>)
        </h4>
        <br />
        <br />
        <Posts>{children()}</Posts>
    </PageWrapper>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
