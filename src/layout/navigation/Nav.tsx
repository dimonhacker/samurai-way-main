import React, {Component} from 'react';
import styled from 'styled-components';
import {NavWrapper} from "../../components/NavWrapper";
import {NavLink} from "react-router-dom";

type NavPropsType = {
    menuItems:Array<string>
}
export const Nav = (props: NavPropsType) => {
    return (
        <NavWrapper>
            <ul>
                {props.menuItems.map((item,index)=>{
                    return <StyledLi key={index}><NavLink  to={"/"+item.toString()}>{item}</NavLink></StyledLi>
                })}
            </ul>
        </NavWrapper>
    );
};

const StyledLi = styled.li`
  a.active{
    color: gold;
  }
`


