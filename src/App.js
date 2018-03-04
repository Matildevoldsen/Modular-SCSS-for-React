import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Info from './Components/Info';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Hi How's u?</p>
                <Info>
                    Whoops, there seems to be something wrong.
                </Info>

                <Info infoClassName="info info--danger">
                    Whoops, there seems to be something wrong.
                </Info>

                <Info infoClassName="info info--warning">
                    Whoops, there seems to be something wrong.
                </Info>

                <Info infoClassName="info info--success">
                    Whoops, there seems to be something wrong.
                </Info>

                <Info infoClassName="info info--primary">
                    Whoops, there seems to be something wrong.
                </Info>

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
