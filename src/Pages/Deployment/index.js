import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class DeploymentPage extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animate-page"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnter={false}
                                     transitionLeave={false}
            >
                <div className="rm-page">
                    <p className="rm-page__header">Deployment</p>
                    <p className="rm-page__text">Software deployment is all of the activities that make a software system available for use. The general deployment process consists of several interrelated activities with possible transitions between them. These activities can occur at the producer side or at the consumer side or both. Because every software system is ...</p>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default DeploymentPage;