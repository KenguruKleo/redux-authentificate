import React from 'react';
import Header from './header';

class App extends React.Component{
    render() {
        return (
            <div>
                <Header/>
                <h1>Test</h1>
                { this.props.children }
            </div>
        );
    }
}


export default App;