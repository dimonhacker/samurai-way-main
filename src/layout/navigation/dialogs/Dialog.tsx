import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type DialogType={
    title:string;
    id:string
}

const Dialog = (props:DialogType) => {
    return (
        <StyledDiv className={"dialog"}>
            <NavLink to={props.id}>{props.title}</NavLink>
        </StyledDiv>
    );
};

export default Dialog;

const StyledDiv = styled.div`
  margin: 5px;
  padding: 0.75em;
  border-radius: 5px;
  border: 1px solid white;
`