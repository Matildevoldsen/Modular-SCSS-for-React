import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Hi How's u?</p>
                <Button bsClass="btn">Button</Button>
                <Button bsClass="btn btn--success">Button</Button>
                <Button bsClass="btn btn--primary">Button</Button>
                <Button bsClass="btn">Button</Button>
            </div>
        );
    }
}

export default App;
