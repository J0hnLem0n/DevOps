import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class DevelopmentPage extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup transitionName="animate-page"
                                     transitionAppear={true}
                                     transitionAppearTimeout={500}
                                     transitionEnter={false}
                                     transitionLeave={false}
            >
                <div className="rm-page">
                    <p className="rm-page__header">Development</p>
                    <p className="rm-page__text">Development is a leading primary research journal covering the field of developmental biology. With its long and prestigious history and its team of expert academic editors, Development is committed to publishing cutting-edge research across the spectrum of animal and plant developmental biology. Over recent years ...</p>
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}

export default DevelopmentPage;