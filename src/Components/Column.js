import React, {Component} from 'react';
import withProps from "../utils/withProps";

class Column extends Component {
    render() {
        return (
            <div {...this.props} className={"column " + this.props.is + " " && this.props.columnClassName}>
                {this.props.children}
            </div>
        );
    }
}

export default withProps(Column);