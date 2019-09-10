interface HeaderLinksProps {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string;
          };
          fields: {
            slug: string;
          };
        };
      }
    ];
  };
}
