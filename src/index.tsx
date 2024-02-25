import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {state} from "./redux/state";
import {AppProps} from "./types/types";


const appProps: AppProps = {
    dialogsProps: state.dialogsPropsWrapper,
    profileProps: state.posts
}

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <App appProps={appProps}/>
    </React.StrictMode>,
    document.getElementById('root')
);