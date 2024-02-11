import React from 'react';
import {PostType} from "../MyPosts";
import styled from "styled-components";

const Post = (props: { post: PostType }) => {
    const post = props.post;
    return (

        <li>
            <Ava src={"https://gimnaziya8mozhga.gosuslugi.ru/netcat_files/8/168/download_568657.png"}/>
            {post.message}
            <span>Likes: </span>{post.likesCount}
        </li>
    );
};

export default Post;

const Ava = styled.img`
width: 30px;
  border-radius: 50%;
`