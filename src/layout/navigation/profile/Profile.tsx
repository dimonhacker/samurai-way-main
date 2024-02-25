import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ContentWrapper} from "../../../components/ContentWrapper";
import {MyPosts} from "./posts/MyPosts";




export const Profile = () => {
    return (
        <ContentWrapper>
            <ProfileInfo />
            <MyPosts/>
        </ContentWrapper>
    );
};

