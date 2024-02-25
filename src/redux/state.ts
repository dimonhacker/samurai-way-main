import {v4} from "uuid";
import {DialogsPropsType, PostArrayWrapper, PostType} from "../types/types";


let dialogsArray = [
    {id: v4(), name: 'Dimych'},
    {id: v4(), name: 'Andrew'},
    {id: v4(), name: 'Sveta'},
    {id: v4(), name: 'Sasha'},
    {id: v4(), name: 'Viktor'},
    {id: v4(), name: 'Valera'},
]
let messagesArray = [
    {id: v4(), name: "Hello"},
    {id: v4(), name: "How your it-camasutra"},
    {id: v4(), name: "yo"}
]

const dialogsPropsWrapper: DialogsPropsType = {
    dialogs: dialogsArray,
    messages: messagesArray
}
const postsArray: Array<PostType> = [
    {id: v4(), message: "Hello, how are your?", likesCount: 12},
    {id: v4(), message: "It's my first post", likesCount: 1},
]

const posts: PostArrayWrapper = {
    postArray: postsArray
}

export const state={
    dialogsPropsWrapper,
    posts
}

