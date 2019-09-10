import styled from "@emotion/styled";
import { Link } from "gatsby";
import { dimensions, colors } from "../../styles/variables";

export const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledLinks = styled(Link)`
  color: ${colors.white};
  text-transform: uppercase;
  padding: ${dimensions.containerPadding}em ${dimensions.containerPadding / 2}em;
`;
