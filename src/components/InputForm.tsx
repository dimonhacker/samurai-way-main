import React from 'react';
import {FlexWrapper} from "./FlexWrapper";
import styled from "styled-components";

export const InputForm = () => {
    return (
        <FlexWrapper>
            <StyledTextArea></StyledTextArea>
            <StyledButton>Add post</StyledButton>
        </FlexWrapper>
    );
};

const StyledTextArea = styled.textarea`
  border-radius: 5px;
`
const StyledButton = styled.button`
    border-radius: 5px;
    padding: 0.5em;
`