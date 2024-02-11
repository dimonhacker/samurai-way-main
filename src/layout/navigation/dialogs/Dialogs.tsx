import React from 'react';
import {ContentWrapper} from "../../../components/ContentWrapper";
import Post from "../../content/posts/post/Post";
import Dialog from "./Dialog";
import styled from "styled-components";
import Message from "./Message";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const Dialogs = () => {
    let dialogsArray = ["first", "second"]
    let messagesArray = ["Hello", "How your it-camasutra", "yo"]
    return (
        <ContentWrapper>
            <DialogsPageWrapper>
                <DialogWrapper>
                    {dialogsArray.map(el => <Dialog title={el}/>)}
                </DialogWrapper>
                <MessagesWrapper>
                    {messagesArray.map(el => <Message body={el}></Message>)}
                </MessagesWrapper>
            </DialogsPageWrapper>
        </ContentWrapper>
    );
}
    ;
    const DialogsPageWrapper = styled.div`
      display: grid;
      grid-template-columns: 2fr 10fr;
    `
    const DialogWrapper = styled.div`
    `
    const MessagesWrapper = styled.div`
      color: white;
    `
