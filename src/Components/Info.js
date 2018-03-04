import React, {Component} from 'react';

class Info extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className={this.props.infoClassName ? this.props.infoClassName : 'info'}>
                <p>{this.props.children} {this.props.isCloseAble ? '' : <span></span>}</p>
            </div>
        );
    }
}

export default Info;