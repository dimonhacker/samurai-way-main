import React from 'react';
import Post from "./post/Post";
import {v4} from "uuid";
import {InputForm} from "../../../../components/InputForm";

export type PostType = {

    id: string
    message: string
    likesCount: number
}

export const MyPosts = () => {
    let postsArray:Array<PostType> = [
        {id: v4(), message: "Hello, how are your?", likesCount:12},
        {id: v4(), message: "It's my first post", likesCount:1},
    ]
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

