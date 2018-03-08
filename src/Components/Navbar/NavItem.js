import React, {Component} from 'react';
import withProps from "../../utils/withProps";

class NavItem extends Component {
    render() {
        return (
            <li {...this.props}>{this.props.children}</li>
        );
    }
}

export default withProps(NavItem);