import * as React from "react";
import styled from "styled-components";

import "../../styles/_index.scss"
import "../..//styles/_text.scss"

const Main = styled.div`
height: 100%;
`;

const MainLayout = ({children}) => {
  return (
      <Main id="main">
        {children}
      </Main>
  )
}

export default MainLayout
