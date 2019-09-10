import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";
import { Link } from "gatsby";
import HeaderLinks from "./HeadLinks";

import { heights, dimensions, colors } from "../styles/variables";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${transparentize(0.2, colors.brand)};
  color: ${colors.white};
`;

const HeaderInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
      <HeaderLinks />
    </HeaderInner>
  </StyledHeader>
);

export default Header;
