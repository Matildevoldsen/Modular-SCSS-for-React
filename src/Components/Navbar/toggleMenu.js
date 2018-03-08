import React, {Component} from "react";
import withProps from "../../utils/withProps";

class ToggleMenu extends Component {


    render() {
        return (
            <div className="toggle">
                <span className="burgerlines"></span>
                <span className="burgerlines"></span>
                <span className="burgerlines"></span>
            </div>
        );
    }
}

export default withProps(ToggleMenu);