import React from 'react'
import styled from 'styled-components'

import portrait from '../common/images/portrait.png'
import { GridWrapper } from '../common/utils/GridWrapper'
import { GREEN, BLACK, WHITE, BASIC, FANCY } from '../common/utils/Constants'


const HeaderBackground = styled.header`
  width: 100%;
  background-color: ${ GREEN };
  display: grid;
  grid-template-columns: auto [content] 960px auto;

  & > * {
    grid-column: content;
  }
`

const ImageDiv = styled.div`
  grid-column: span 6;
  display: flex;
  align-items: flex-end;
  & img {
    width: 100%;
  }
`

const ContentDiv = styled.div`
  grid-column: span 6;
  padding: 60px 0;
`

const Navigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin-bottom: 128px;

  & > li {
    text-transform: uppercase;
  }

  & a {
    font-family: ${ FANCY };
    color: ${ BLACK };
    text-decoration: none;
  }
`
const Button = styled.button`
  border: 3px solid ${ BLACK };
  border-radius: 8px;
  background-color: ${ WHITE};
  padding: 16px 24px;
  font-family: ${ FANCY };
  text-transform: uppercase;
  margin-right: 20px;
`

const Introduction = styled.div`
  p, h2 {
    font-family: ${ BASIC };
    font-size: 32px;
    font-weight: 400;
    margin: 0;
  }

`

const Name = styled.h1`
  font-family: ${ FANCY };
  font-size: 72px;
  text-transform: uppercase;
  margin: 0;
`


const Header = () => {
  return (
    <HeaderBackground>
      <GridWrapper>
        <ImageDiv>
          <img src={portrait} alt="placeholder"/>
        </ImageDiv>
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
          <div>
            <Introduction>
              <p>Hi, I am </p>
              <Name>Gary Zhao</Name>
              <h2>Front End Web Developer</h2>
            </Introduction>
            <p>I am a web developer who loves crafting code into beautiful experiences on the web. I work tightly with designers, project managers, and clients to transform their ideas into fully functional web experiences HTML, CSS, and JS are my bread and butter, but I am not afraid to dive into new and exciting technologies.</p>
            <Button>
              Download Resume
          </Button>
            <Button>
              Email Me
          </Button>
          </div>
        </ContentDiv>
      </GridWrapper>
    </HeaderBackground>
  )
}

export default Header
