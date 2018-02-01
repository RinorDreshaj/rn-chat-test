import React, { Component } from 'react';

import Home from './src/Components/Home';
import Chat from './src/Components/Chat';

import {
  Router,
  Scene
} from 'react-native-router-flux';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root" style={{paddingTop: 64}}>
                    <Scene key="home" component={Home} title="home"/>
                    <Scene key="chat" component={Chat} title="chat"/>
                </Scene>
            </Router>
        )
    }
}

export default App;