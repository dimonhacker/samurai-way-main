import React from 'react';


import styled from "styled-components";
import {Description} from "../../../content/Description";
import {LogoImg} from "../../../../components/LogoImg";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ImagePropsType = {
    width:string,
    height?:string,

    src?:string
}
const ProfileInfo = () => {
    return (
        <>
            <BackGroundImg width={"100%"} height={"400px"}
                           src={"https://img.goodfon.com/original/1366x768/a/5c/geiranger-norway-geyranger.jpg"}>
            </BackGroundImg>
            <FlexWrapper>
                <ImgWrapper width={"250px"}>
                    <LogoImg src={"https://w.forfun.com/fetch/5f/5fae8b9ce29a10950b001db52779ca78.jpeg"}/>
                </ImgWrapper>
                <Description title={"cat"} body={"bla-bla-bla"}/>
            </FlexWrapper>
        </>
    );
};


const ImgWrapper = styled.div<ImagePropsType>`
  width: ${props => props.width || "200px"};
  height: ${props => props.height || "auto" };

  img {
    width: 100%;
  }
`
const BackGroundImg = styled.div<ImagePropsType>`
  content: "";
  max-height: 300px;
  width: 100%;
  background-image: url(${props => props.src});
  height:${props => props.height};
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0 10px 0;
`
export default ProfileInfo;