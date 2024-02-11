import React from 'react';
import {type} from "os";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {v4} from "uuid";
import Dialog from "./Dialog";
import {Dialogs} from "./Dialogs";
import {Content} from "../../content/Content";

type MessageType = {
    body:string
}

const Message = (props:MessageType) => {
    return (
        <StyledDiv>
            {props.body}
        </StyledDiv>
    );
};

export default Message;

const StyledDiv = styled.div`
  margin: 5px;
  padding: 0.75em;
  border-radius: 5px;
  border: 1px solid white;
`