export { HeaderLinks } from "./component";

export interface HeaderLinksProps {
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
