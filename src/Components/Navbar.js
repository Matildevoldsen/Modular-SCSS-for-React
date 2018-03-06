import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav role="navbar" className={"navbar " + this.props.navbarClassName}>
                {this.props.children}
            </nav>
        );
    }
}

export default Navbar;