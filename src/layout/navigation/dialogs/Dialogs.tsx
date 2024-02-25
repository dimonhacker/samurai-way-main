import React from 'react';
import {ContentWrapper} from "../../../components/ContentWrapper";
import Dialog from "./Dialog";
import styled from "styled-components";
import Message from "./Message";
import {DialogsPropsWrapperType} from "../../../types/types";



export const Dialogs = (props:DialogsPropsWrapperType) => {
        let dialogsArray = props.dialogsProps.dialogs
        let messagesArray = props.dialogsProps.messages
        return (
            <ContentWrapper>
                <DialogsPageWrapper>
                    <DialogWrapper>
                        {dialogsArray.map(el => <Dialog title={el.name} id={el.id}/>)}
                    </DialogWrapper>
                    <MessagesWrapper>
                        {messagesArray.map(el => <Message body={el.name} id={el.id}></Message>)}
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
