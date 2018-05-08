import React, { Component } from 'react';
import './App.css';
import MainRoundMenu from './MainRoundMenu/index'
import DevelopmentPage from './Pages/Development/index'

class App extends Component {
    state = {
        currentPageId: 'Development'
    }
    render() {
        const menuItems = [
            {
                id: 'Development',
                title: 'Development',
                icon:'Code'
            },
            {
                id: 'Testing',
                title: 'Testing',
                icon:'Check'
            },
            {
                id: 'Deployment ',
                title: 'Deployment ',
                icon:'Deploy'
            },
            {
                id: 'Commit',
                title: 'Commit',
                icon:'Commit'
            }
        ]
        return (
            <div className="rm-content">
                <MainRoundMenu
                    size = '440'
                    iconSize = '120'
                    menuItems = { menuItems }
                />
                <div className="rm-content__description">
                    {this.state.currentPageId === 'Development' && <DevelopmentPage />}
                </div>
            </div>
        );
    }
}

export default App;
