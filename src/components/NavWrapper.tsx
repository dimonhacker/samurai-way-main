import styled from "styled-components";


export const NavWrapper = styled.nav`
  grid-area: navigation;
  background-color: cornflowerblue;
  padding: 10px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    list-style: none;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: white;
  }
`