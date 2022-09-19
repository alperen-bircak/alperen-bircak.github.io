import * as React from "react"

import "../styles/_index.scss"
import "../styles/_text.scss"
import styled, { ThemeProvider } from "styled-components"

const theme = {
  lighter: "#ffffff",
  light: "#eaf2f6",
  pop: "#f48847",
  dark: "#172b36",
  darker: "#000000"
}

const Background = styled.div`
  background-color: ${props=>props.theme.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Main = styled.div`
  width: 90%;
  max-width: 1200px;
  
  background-color: ${p=>p.theme.light};
  margin: 50px;
`;

const IndexPage = () => {
  return (   
    <ThemeProvider theme={theme}>
      <Background>
        <Main>
          {Array.apply(null, Array(100)).map(()=>(
            <h1>
              Hello
            </h1>
          ))}
        </Main>
      </Background>
    </ThemeProvider>
  )
}
export default IndexPage;

