import React from 'react';
import styled from "styled-components";
import {InputForm} from "../../../components/InputForm";
import Post from "./post/Post";

export type PostType = {
    message: string
    id: string
    likesCount: number
}

export const MyPosts = (props: { posts: Array<PostType> }) => {
    return (
        <StyledPosts>
            <h2>My Posts</h2>
            <InputForm></InputForm>
            <ul>
                {props.posts.map(
                    post => <Post post={post}></Post>
                )}
            </ul>
        </StyledPosts>
    );
};

const StyledPosts = styled.div`
  h2 {
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
  }
`

