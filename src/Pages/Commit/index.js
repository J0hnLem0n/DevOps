import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class CommitPage extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animate-page"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnter={false}
                                     transitionLeave={false}
            >
                <div className="rm-page">
                    <p className="rm-page__header">Commit</p>
                    <p className="rm-page__text">The COMMIT Foundation is changing the way Veterans and the private sector think about military transition. We assist America's Veterans in finding purpose as they transition from military careers to civilian life. COMMIT's programs help Veterans successfully transition into the civilian workforce.</p>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default CommitPage;