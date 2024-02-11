import React, {useState} from 'react';
import {Content} from "../content/Content";
import {Dialogs} from "./dialogs/Dialogs";

type ContentHolderType = {
    contentName : string
}
const ContentHolder = (props:ContentHolderType) => {
    const [contentHolder, setContentHolder] = useState<JSX.Element>(Content);
    if(props.contentName==="Dialogs"){
        setContentHolder(Dialogs)
    }
    else setContentHolder(Content)
    return (
        contentHolder
    );
};

export default ContentHolder;