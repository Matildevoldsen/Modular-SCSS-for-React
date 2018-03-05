# Modular SCSS for ReactJS

This is a React based component library for exclusively web-browsers in it's **beta version**.

## Grid

We use a 12-grid system.

Here's an example of how to use the grid system.

```javascript
import React, {Component} from 'react';
import './App.css';
import Button from './Components/Button';
import Column from './Components/Column';
import Row from './Components/Row';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Row>
                    <Column is="is-4">
                        <Button buttonClassName="btn">Button</Button>
                    </Column>

                    <Column is="is-4">
                        <Button buttonClassName="btn">Button</Button>
                    </Column>

                    <Column is="is-4">
                        <Button buttonClassName="btn">Button</Button>
                    </Column>
                </Row>
            </div>
        );
    }
}

export default App;

```

## Components

All components listed, including modifier classes.

To apply a class to a component use: `componentClassName`.

* Info: `info`
* Button: `btn`

## Quick Installation

To install it quickly use `npm install modular-scss-for-react`

To access the CSS use `import` function to import app.css.