import React from 'react';
import styled from "styled-components";

type HeaderType = {
    className: string
}

export const HeaderDiv = styled.header<HeaderType>`
  grid-area: header;
  padding: 10px;
  background-color: #61dafb;

  img {
    max-height: 100%;
  }
`