import React from 'react'
import styled from 'styled-components'
import { GridWrapper } from '../common/utils/GridWrapper'
import { GREEN, BLACK, WHITE } from '../common/utils/Colors'


const HeaderBackground = styled.header`
  width: 100%;
  height: 700px;
  background-color: ${ GREEN };
  display: grid;
  grid-template-columns: auto [content] 960px auto;

  & > * {
    grid-column: content;
  }
`
const Navigation = styled.ul`
  /* grid-column: 6 / -1; */
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 67px 0 137px; //TODO: change this in the future

  & > li {
    text-transform: uppercase;
  }

  & a {
    color: ${ BLACK };
    text-decoration: none;
  }
`

const ContentDiv = styled.div`
  grid-column: 6 / -1;
`

const H1 = styled.h1`
  /* grid-column: 6 / -1; */
`

const Header = () => {
  return (
    <HeaderBackground>
      <GridWrapper>
        <div>
          <img src="https://via.placeholder.com/150x700" alt="placeholder"/>
        </div>
        <ContentDiv>
          <h1>test</h1>
        </ContentDiv>
      </GridWrapper>
    </HeaderBackground>
  )
}

export default Header
