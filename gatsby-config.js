module.exports = {
    siteMetadata: {
        title: 'The Blog of Sam Marshall',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: { path: `${__dirname}/src/pages`, name: 'pages' },
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-styled-components',
    ],
};
