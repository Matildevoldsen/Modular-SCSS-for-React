import React, {Component} from 'react';

class Button extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button
                    name={this.props.btnName}
                    className={this.props.buttonClassName}
                >{this.props.children}</button>
            </div>
        );
    }
}

export default Button;