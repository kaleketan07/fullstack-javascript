import React from 'react';
import Header from './Header.js'
class App extends React.Component{

    state = {
        header: "Homepage",
    }

    render() {
        return <Header message = {this.state.header}/>;
    }
}

export default App;