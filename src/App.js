import React, {Component} from 'react';
import classes from './App.css';
import Button from './Components/Button';
import Info from './Components/Info';
import Column from './Components/Column';
import Row from './Components/Row';
import Navbar from "./Components/Navbar/Navbar";
import NavContainer from "./Components/Navbar/NavContainer";
import NavItem from "./Components/Navbar/NavItem";
import withProps from "./utils/withProps";

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Navbar className="navbar">
                        <NavContainer navContainerClassName="left">
                            <h1>Logo</h1>
                            <NavItem><a href="">Home</a></NavItem>
                        </NavContainer>

                        <NavContainer navContainerClassName="right">
                            <NavItem><a href="">Home</a></NavItem>
                            <Button id="1" buttonClassName="btn">Button</Button>

                        </NavContainer>
                    </Navbar>
            </div>
        );
    }
}

export default withProps(App);
