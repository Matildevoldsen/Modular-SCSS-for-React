import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Info from './Components/Info';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p>Hello, from <b>Modular SCSS for ReactJS</b></p>
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

                <Button buttonClassName="btn">Button</Button><br/>
                <Button buttonClassName="btn btn--success">Button</Button><br/>
                <Button buttonClassName="btn btn--primary">Button</Button><br/>
                <Button buttonClassName="btn btn--warning">Button</Button><br/>
                <Button buttonClassName="btn btn--danger btn--outlined btn--rounded">Button</Button><br/>
            </div>
        );
    }
}

export default App;
