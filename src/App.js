import React, { Component } from 'react';
import './App.css';
import MainRoundMenu from './MainRoundMenu/index'
import DevelopmentPage from './Pages/Development/index'
import TestingPage from './Pages/Testing'
import DeploymentPage from './Pages/Deployment'
import CommitPage from './Pages/Commit'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageId: 'Development'
        };
    }
    setPage = (pageId) => {
        this.setState({currentPageId: pageId})
    };
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
                id: 'Deployment',
                title: 'Deployment ',
                icon:'Deploy'
            },
            {
                id: 'Commit',
                title: 'Commit',
                icon:'Commit'
            }
        ];
        return (
            <div className="rm-content">
                <MainRoundMenu
                        size = '440'
                        iconSize = '130'
                        menuItems = { menuItems }
                        setPage = {this.setPage}
                />
                <div className="rm-content__description">
                    {this.state.currentPageId === 'Development' && <DevelopmentPage />}
                    {this.state.currentPageId === 'Testing' && <TestingPage />}
                    {this.state.currentPageId === 'Deployment' && <DeploymentPage />}
                    {this.state.currentPageId === 'Commit' && <CommitPage />}
                </div>
            </div>
        );
    }
}

export default App;
