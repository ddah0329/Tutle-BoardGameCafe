// turtle_co/src/App.js

import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./components/section/Header";
import Main from "./components/section/Main";
import Footer from "./components/section/Footer";

import Home from "./pages/Home";
import GameList from "./pages/GameList";
import Dollimpan from "./pages/Dollimpan";
import Not from "./pages/Not";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Main>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/dollimpan' element={<Dollimpan/>}/>
                        <Route path='/gamelist' element={<GameList/>}/>
                        <Route path='/*' element={<Not/>}/>
                    </Routes>
                </Main>
                <Footer/>
            </BrowserRouter>
        );
    }
}

export default App;