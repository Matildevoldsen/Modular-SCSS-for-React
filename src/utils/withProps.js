import React, {Component} from "react";

const withProps = (WrappedComponent, classes) => {
    return class extends Component {

        constructor(props) {
            super(props);


            this.state = {
                props: props
            };

            console.log(props);
        }


        render() {
            return (
                <WrappedComponent {...this.state.props}></WrappedComponent>
            );
        }
    }
}

export default withProps;