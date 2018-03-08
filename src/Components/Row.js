import React, {Component} from 'react';
import withProps from "../utils/withProps";

class Row extends Component {
    render() {
        return (
            <div {...this.props} className={"columns " + this.props.rowClassName}>
                {this.props.children}
            </div>
        );
    }
}

export default withProps(Row);