import React from 'react';
import Post from "./post/Post";
import {v4} from "uuid";
import {InputForm} from "../../../../components/InputForm";
import {PostArrayWrapper, PostType} from "../../../../types/types";



export const MyPosts = (props:PostArrayWrapper) => {
    let postsArray:Array<PostType> = props.postArray
    return (
        <div>
            <h2>My Posts</h2>
            <InputForm/>
            <ul>
                {postsArray.map(
                    post => <Post post={post}></Post>
                )}
            </ul>
        </div>
    );
};

