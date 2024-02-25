import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ContentWrapper} from "../../../components/ContentWrapper";
import {MyPosts} from "./posts/MyPosts";
import {ProfilePropsWrapperType} from "../../../types/types";





export const Profile = (props:ProfilePropsWrapperType) => {
    return (
        <ContentWrapper>
            <ProfileInfo/>
            <MyPosts postArray={props.profileProps.postArray}/>
        </ContentWrapper>
    );
};

