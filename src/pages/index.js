import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BigP = styled.p`
    font-size: 88px;
`;

const IndexPage = () => (
    <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <BigP>I wonder if we can use styled-components...</BigP>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
);

export default IndexPage;
