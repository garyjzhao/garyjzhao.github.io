import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { heights, dimensions, colors } from "../styles/variables";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledLinks = styled(Link)`
  color: ${colors.white};
  text-transform: uppercase;
`;

const HeaderLinks = () => (
  <StyledUl>
    <li>
      <StyledLinks to="upcoming-events">Upcoming Events</StyledLinks>
    </li>
  </StyledUl>
);

export default HeaderLinks;
