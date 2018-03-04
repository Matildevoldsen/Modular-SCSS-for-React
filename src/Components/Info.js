import React, {Component} from 'react';

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
            <div
                onClick={this.clicked}
                className={this.props.infoClassName ? this.props.infoClassName : 'info'}>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Info;