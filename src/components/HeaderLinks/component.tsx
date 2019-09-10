import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { HeaderLinksProps } from "./index";
import { StyledUl, StyledLinks } from "./styles";

const HeaderLinks: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data: HeaderLinksProps) => (
      <StyledUl>
        {data.allMarkdownRemark.edges.map(edge => (
          <li>
            <StyledLinks to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </StyledLinks>
          </li>
        ))}
      </StyledUl>
    )}
  />
);

export default HeaderLinks;
