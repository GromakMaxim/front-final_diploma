import './App.css';
import MainPage from "./components/pages/MainPage";
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import '../src/css/main.css';

function App() {
    return (
        <Router>
            <div className="App">
                <MainPage/>
            </div>
        </Router>
    );
}

export default App;
