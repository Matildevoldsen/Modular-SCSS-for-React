import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Info from './Components/Info';
import Column from './Components/Column';
import Row from './Components/Row';
import Navbar from "./Components/Navbar";
import NavContainer from "./Components/NavContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <NavContainer is="left">
                        <h1>Logo</h1>
                        <li><a href="">Login</a></li>
                    </NavContainer>

                    <NavContainer is="right">
                        <li><a href="">Login</a></li>
                    </NavContainer>
                </Navbar>
            </div>
        );
    }
}

export default App;
