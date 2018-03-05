import React, {Component} from 'react';

class Column extends Component {
    render() {
        return (
            <div className={"column " + this.props.is}>
                {this.props.children}
            </div>
        );
    }
}

export default Column;