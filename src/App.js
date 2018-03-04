import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Hi How's u?</p>
                <Button bsClass="btn">Button</Button><br/>
                <Button bsClass="btn btn--success">Button</Button><br/>
                <Button bsClass="btn btn--primary">Button</Button><br/>
                <Button bsClass="btn btn--warning">Button</Button><br/>
                <Button bsClass="btn btn--danger btn--outlined btn--rounded">Button</Button><br/>
            </div>
        );
    }
}

export default App;
