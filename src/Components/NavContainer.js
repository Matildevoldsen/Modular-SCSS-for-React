import React, {Component} from 'react';

class NavContainer extends Component {
    render() {
        return (
            <ul className={"nav-" + this.props.is}>
                {this.props.children}
            </ul>
        );
    }
}

export default NavContainer;