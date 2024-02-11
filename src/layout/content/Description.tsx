import React from 'react';
import styled from "styled-components";

type DescriptionType = {
    title:string,
    body:string
}

export const Description = (props:DescriptionType) => {
    return (
        <StyledDescription>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </StyledDescription>
    );
};

const StyledDescription = styled.div`
`