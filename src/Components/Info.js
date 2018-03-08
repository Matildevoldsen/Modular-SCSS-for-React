import React, {Component} from 'react';
import withProps from "../utils/withProps";

class Info extends Component {

    constructor() {
        super();

        this.state = {
            closed: false,
        };
    }

    componentDidMount() {

    }

    clicked(e) {
        e.currentTarget.style.display = "none";
    }

    render() {
        return (
            <div {...this.props}
                onClick={this.clicked}
                className={this.props.infoClassName ? this.props.infoClassName : 'info'}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default withProps(Info);