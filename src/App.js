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
import ToggleMenu from "./Components/Navbar/toggleMenu";

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Navbar className="navbar">
                        <NavContainer navContainerClassName="left">
                            <h1>Logo</h1>
                            <NavItem><a className="navbar--link" href="">Home</a></NavItem>
                        </NavContainer>

                        <NavContainer navContainerClassName="mobile" ref="nav-mobile">
                            <NavItem><a className="navbar--link">Home</a></NavItem>
                            <NavItem><a className="navbar--link">About</a></NavItem>
                        </NavContainer>

                        <NavContainer navContainerClassName="right">
                            <NavItem><a href="" className="navbar--link" >Home</a></NavItem>
                            <Button id="1" buttonClassName="btn btn--success">Button</Button>

                            <ToggleMenu />
                        </NavContainer>
                    </Navbar>
            </div>
        );
    }
}

export default withProps(App);
