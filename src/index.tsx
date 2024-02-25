import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {v4} from "uuid";


export type DialogsArrayProps = Array<DialogProps>
export type DialogProps = {
    id:string
    name:string
}
export type MessagesArrayProps = Array<MessageProps>
export type MessageProps = {
    id:string
    name:string
}
export type DialogsPropsType = {
    dialogs:DialogsArrayProps
    messages: MessagesArrayProps
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

export type AppProps = {
    dialogsProps:DialogsPropsType
    num:number
}
export type DialogsPropsWrapperType={
    dialogsProps:DialogsPropsType
}
const dialogsPropsWrapper:DialogsPropsType = {
        dialogs: dialogsArray,
        messages: messagesArray
}
const appProps:AppProps = {
    dialogsProps:dialogsPropsWrapper,
    num:1
}
export type AppPropsWrapperType = {
    appProps:AppProps
}
ReactDOM.render(
    <React.StrictMode>
    <GlobalStyle/>
    <App appProps={appProps}/>
    </React.StrictMode>        ,
  document.getElementById('root')
);