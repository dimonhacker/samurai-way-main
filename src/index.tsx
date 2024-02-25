import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {v4} from "uuid";


export type DialogsArrayProps = Array<DialogProps>
export type DialogProps = {
    id: string
    name: string
}
export type MessagesArrayProps = Array<MessageProps>
export type MessageProps = {
    id: string
    name: string
}
export type DialogsPropsType = {
    dialogs: DialogsArrayProps
    messages: MessagesArrayProps
}

export type PostType = {

    id: string
    message: string
    likesCount: number
}

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

export type PostArrayWrapper = {
    postArray: Array<PostType>
}
export type AppProps = {
    dialogsProps: DialogsPropsType
    profileProps: ProfilePropsWrapperType
}
export type DialogsPropsWrapperType = {
    dialogsProps: DialogsPropsType
}
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
const profileProps: ProfilePropsWrapperType = {
    profileProps: posts
}
const appProps: AppProps = {
    dialogsProps: dialogsPropsWrapper,
    profileProps: profileProps
}
export type AppPropsWrapperType = {
    appProps: AppProps
}
export type ProfilePropsWrapperType = {
    profileProps: ProfilePropsType
}
export type ProfilePropsType = {
    postArray: Array<PostType>
    profileInfo?: Object

}
ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App appProps={appProps}/>
    </React.StrictMode>,
    document.getElementById('root')
);