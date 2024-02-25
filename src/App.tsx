import React from 'react';
import './App.css';
import styled from "styled-components";
import {Header} from "./layout/header/Header";
import {Nav} from "./layout/navigation/Nav";
import {News} from "./layout/navigation/news/News";
import {Music} from "./layout/navigation/music/Music";
import {Settings} from "./layout/navigation/settings/Settings";
import {Dialogs} from "./layout/navigation/dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {v4} from "uuid";
import {Profile} from "./layout/navigation/profile/Profile";
import {AppPropsWrapperType} from "./index";
const menuItems = ["Profile", "Dialogs", "News","Music", "Settings"];


const App = (props: AppPropsWrapperType) => (
    <BrowserRouter>
        <Wrapper className="App">
            <Header/>
            <Nav menuItems={menuItems}/>
                <Routes>
                    <Route key={v4()} path={"/dialogs/*"} element={<Dialogs dialogsProps={props.appProps.dialogsProps}/>}/>
                    <Route key={v4()} path={"/profile"} element={<Profile profileProps={props.appProps.profileProps.profileProps}/>}/>
                </Routes>
        </Wrapper>
    </BrowserRouter>
);

const Wrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-areas: 
    "header header"
    "navigation content";
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;
`


export default App;
