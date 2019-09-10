import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { dimensions, colors } from "../styles/variables";

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledLinks = styled(Link)`
  color: ${colors.white};
  text-transform: uppercase;
  padding: ${dimensions.containerPadding}em ${dimensions.containerPadding / 2}em;
`;

const HeaderLinks = () => (
  <StyledUl>
    <li>
      <StyledLinks to="upcoming-events">Upcoming Events</StyledLinks>
    </li>
    <li>
      <StyledLinks to="about-us">About Us</StyledLinks>
    </li>
    <li>
      <StyledLinks to="contact-us">Contact Us</StyledLinks>
    </li>
  </StyledUl>
);

export default HeaderLinks;
