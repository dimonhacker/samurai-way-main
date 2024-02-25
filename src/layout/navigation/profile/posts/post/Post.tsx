import React from 'react';
import styled from "styled-components";
import {ListItem} from "@mui/material";
import AvatarIcon from '../../../../../images/ava_icon.jpg';
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {PostType} from "../../../../../types/types";

const Post = (props: { post: PostType }) => {
    const post = props.post;
    return (
        <ListItem key={post.id}>
            <FlexWrapper direction={"column"}>
                <FlexWrapper align={'center'} justify={"space-around"}>
                    <Ava src={AvatarIcon}/>
                    {post.message}
                </FlexWrapper>
                <FlexWrapper align={'center'}>
                    <span>Likes: </span>{post.likesCount}
                </FlexWrapper>
            </FlexWrapper>
        </ListItem>
    );
};

export default Post;

const Ava = styled.img`
  width: 30px;
  border-radius: 50%;
`