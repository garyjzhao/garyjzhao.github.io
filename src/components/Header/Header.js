import React from 'react'
import styled from 'styled-components'
import { Green } from '../common/utils/Colors'


const HeaderBackground = styled.header`
  width: 100%;
  height: 700px;
  background-color: ${Green};
  display: grid;
  grid-template-columns: auto [content] 960px auto;

  & > * {
    grid-column: content;
  }
`

const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 20px;
`

const Navigation = styled.ul`
  grid-column: 5 / -1;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 67px 0 137px;

  & > li {
    text-transform: uppercase;
  }
`

const H1 = styled.h1`
  grid-column: 5 / -1;
`

const Header = () => {
  return (
    <HeaderBackground>
      <GridWrapper>
        <Navigation>
            <li>
              <a href="#">
                Skills.
              </a>
            </li>
            <li>
              <a href="#">
                Experience.
              </a>
            </li>
            <li>
              <a href="#">
                Personal Interest.
              </a>
            </li>
        </Navigation>
        <H1>
          Hello World
        </H1>
      </GridWrapper>
    </HeaderBackground>
  )
}

export default Header
