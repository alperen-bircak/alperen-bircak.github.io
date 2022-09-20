import React, { useState } from "react"

import "../styles/_index.scss"
import "../styles/_text.scss"
import styled, { ThemeProvider } from "styled-components"

const theme = {
  lighter: "#ffffff",
  light: "#eaf2f6",
  pop: "#f48847",
  dark: "#172b36",
  darker: "#000000",
  radius: "35px",
}

const Background = styled.div`
  background-color: ${props => props.theme.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  width: 90%;
  max-width: 800px;

  
  background-color: ${p => p.theme.lighter};
  margin: 50px 0;
  margin-right: 150px;
  @media screen and (max-width: 998px) {
    margin: 15px 0;
    margin-right: 0px;
    font-size: 0.8em;

  }
  border-radius: ${p=>p.theme.radius};
  padding: 20px;
  box-shadow: 0px 5px 30px 5px black;
`;

const Title = styled.h1`
letter-spacing: unset;
color: ${p=>p.theme.darker};
font-weight: bold;
color: ${p=>p.theme.dark};
font-size: 4em;
`

const Divider = styled.hr`
border: none;
margin: 10px 0;
border-top: 10px solid ${p=>p.theme.light};
`
const ProjectList = styled.ul`
display: flex;
flex-direction: column;
gap: 30px;
list-style: none;
position: relative;
margin: 20px 0;
padding: 0;
li {
  background-color: ${p=>p.theme.pop};
  color: ${p=>p.theme.darker};
  min-height: 150px;
  padding: 25px;
  border-radius: ${p=>p.theme.radius};
  position: relative;
  box-shadow: 0px 2px 20px 2px #0009;
  transform: translate(0 ,0);
  transition: transform 0.2s, box-shadow 0.2s;

  right: -150px;
  &:nth-child(2n-1) {
    right: -125px;
  }
  @media screen and (max-width: 998px) {
    height: calc(100vh - 20px);
    right: 0px;
    width: 100%;
  &:nth-child(2n-1) {
    right: 0px;

  }
  }

  &:hover {
    transform: translate(25px, -5px);
    box-shadow: -2px 5px 20px 3px #0009;
  }
}

`

const Desc = styled.p`
font-size: 1.2em;
`

const IndexPage = () => {
  const [color,setColor] = useState('pink');

  
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Main>
          <Title>
            Alperen's Perfect<br/> 
            Github Page
          </Title> 
          
          <Divider/>
          
          <Desc>Hello there, welcome to my github page! The purpose of this page is to be a hub for my personal projects.</Desc>

          <ProjectList>
            <li>
              CVPage
            </li>
            <li>
              Personal Website
            </li>
            <li>
              And more...
            </li>
           
          </ProjectList>
        </Main>
      </Background>
    </ThemeProvider>
  )
}
export default IndexPage;

