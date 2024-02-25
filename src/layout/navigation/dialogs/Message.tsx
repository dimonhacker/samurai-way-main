import React from 'react';
import styled from "styled-components";

type MessageType = {
    body:string
    id:string
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