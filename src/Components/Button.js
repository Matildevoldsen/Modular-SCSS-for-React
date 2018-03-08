import React, {Component} from 'react';
import withProps from "../utils/withProps";

class Button extends Component {

    constructor() {
        super();
    }

    render() {
        return (
                <button {...this.props}
                    name={this.props.btnName}
                    className={this.props.buttonClassName}
                >{this.props.children}</button>
        );
    }
}

export default withProps(Button);