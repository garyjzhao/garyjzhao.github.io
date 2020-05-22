import React from 'react'
import styled from 'styled-components'

import { tablet, desktop } from '../common/utils/Breakpoints'
import { Green } from '../common/utils/Colors'
import GridWrapper from '../common/GridWrapper'

const StyledHeader = styled.header`
  height: 300px;
  position: relative;
  display: grid;
`
const SkewedDiv = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  transform: skewY(-3deg);
  background: ${Green}
`

const Name = styled.h1`
  place-self: center;
  margin: 0;
  font-family: 'Luckiest Guy', Verdana, Arial, sans-serif;
  font-size: 80px;
  grid-column: 1 / end;
  text-align: center;

  @media (min-width: ${tablet}) {
    grid-column: 6 / span 6;
  }

  @media (min-width: ${desktop}) {
    font-size: 120px;
  }

  `

const Title = styled.h2`
  @media (max-width: ${tablet}) {
    grid-column: 5 / span 5;
  }
  grid-column: 8 / span 5
`


const Header = () => {
  return (
    <StyledHeader>
      <SkewedDiv />
      <GridWrapper>
        <Name>Gary Zhao</Name>
        <Title>Product Engineer</Title>
      </GridWrapper>
    </StyledHeader>
  )
}

export default Header
