import React, {useState} from 'react';
import {Dialogs} from "./dialogs/Dialogs";
import {Profile} from "./profile/Profile";

type ContentHolderType = {
    contentName : string
}
const ContentHolder = (props:ContentHolderType) => {
    // const [contentHolder, setContentHolder] = useState<JSX.Element>(Profile);
    // if(props.contentName==="Dialogs"){
    //     setContentHolder(Dialogs())
    // }
    // else setContentHolder(Profile)
    return (
        // contentHolder
        null
    );
};

export default ContentHolder;