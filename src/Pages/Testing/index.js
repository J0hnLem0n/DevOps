import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TestingPage extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animate-page"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnter={false}
                                     transitionLeave={false}
            >
                <div className="rm-page">
                    <p className="rm-page__header">Testing</p>
                    <p className="rm-page__text">Software testing is an investigation conducted to provide stakeholders with information about the quality of the software product or service under test. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation.</p>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default TestingPage;