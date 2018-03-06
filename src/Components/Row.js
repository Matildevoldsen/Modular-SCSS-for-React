import React, {Component} from 'react';

class Row extends Component {
    render() {
        return (
            <div className={"columns " + this.props.rowClassName}>
                {this.props.children}
            </div>
        );
    }
}

export default Row;