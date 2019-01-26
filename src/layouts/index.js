import React from "react";
import styled, { injectGlobal } from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Link from "gatsby-link";

const PageWrapper = styled.section``;

const TitleLink = styled(Link)``;

const Title = styled.h1``;

const Posts = styled.section``;

const TemplateWrapper = ({ children }) => (
  <PageWrapper>
    <Helmet
      title="sam is typing..."
      meta={[{ name: "description", content: "The blog of Sam Marshall" }]}
    >
      <link
        rel="stylesheet"
        href="https://cdn.rawgit.com/yegor256/tacit/gh-pages/tacit-css-1.2.9.min.css"
      />
    </Helmet>
    <header>
      <TitleLink to="/">
        <Title>"sam is typing..."</Title>
      </TitleLink>
      <h4>
        (A Blog by <a href="https://sjm.codes">Sam Marshall</a>)
      </h4>
    </header>
    <Posts>{children()}</Posts>
  </PageWrapper>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
