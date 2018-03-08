import React, {Component} from 'react';
import withProps from "../../utils/withProps";

class Navbar extends Component {
    render() {
        const {navbarClassName, navBarProps, classes} = this.props;
        return (
            <nav {...this.props}>
                {this.props.children}
            </nav>

        );
    }
}

export default withProps(Navbar);