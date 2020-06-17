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

const ContentDiv = styled.div`
  grid-column: 6 / -1;
`

const Navigation = styled.ul`
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



const Header = () => {
  return (
    <HeaderBackground>
      <GridWrapper>
        <div>
          <img src="https://via.placeholder.com/150x700" alt="placeholder"/>
        </div>
        <ContentDiv>
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
                Personal Interests.
              </a>
            </li>
          </Navigation>
          <h1>Gary Zhao</h1>
          <h2>Front End Web Developer</h2>
          <p>I am a web developer who loves crafting code into beautiful experiences on the web. I work tightly with designers, project managers, and clients to transform their ideas into fully functional web experiences HTML, CSS, and JS are my bread and butter, but I am not afraid to dive into new and exciting technologies.</p>

        </ContentDiv>
      </GridWrapper>
    </HeaderBackground>
  )
}

export default Header
