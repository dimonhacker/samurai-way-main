import React from 'react';
import {HeaderDiv} from "../../components/HeaderDiv";
import {LogoImg} from "../../components/LogoImg";




export const Header = () => {
    return (
        <HeaderDiv className={"header"}>
            <LogoImg  src={"https://www.mybrooklyn.com/uploads/businesses/business_47360_17a01ae83a4ef9a75a7376a248289efe.png"}/>
        </HeaderDiv>
    );
};

