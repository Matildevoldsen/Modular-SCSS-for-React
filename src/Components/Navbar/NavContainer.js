import React, {Component} from 'react';
import withProps from "../../utils/withProps";


class NavContainer extends Component {
    render() {
        return (
            <ul className={"nav-" + this.props.navContainerClassName} {...this.props}>
                {this.props.children}
            </ul>
        );
    }
}

export default withProps(NavContainer);