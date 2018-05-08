import React, { Component } from 'react';
import CodeIcon from '@material-ui/icons/Code';
import CheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DeployIcon from '@material-ui/icons/CloudUpload';
import CommitIcon from '@material-ui/icons/Wc';
import InfoIcon from '@material-ui/icons/Info';
import './index.css';

class MainRoundMenu extends Component {
    state = {
        transform: 30
    };
    getIcon(icon) {
        switch (icon) {
            case 'Code':
                return <CodeIcon />;
            case 'Check':
                return <CheckIcon />;
            case 'Deploy':
                return <DeployIcon />;
            case 'Commit':
                return <CommitIcon />;
            default:
                return <InfoIcon />;
        }
    };
    getMenuItems() {
        const { size, iconSize, menuItems } = this.props;
        const total = menuItems.length;
        const alpha = Math.PI * 2 / total;
        /**Радиус и смещение*/
        const radius = (size - iconSize) / 2;
        const items = menuItems.map((item, index)=> {
            let theta = alpha * index;
            let pointX = radius + Math.cos(theta) * radius;
            let pointY = radius +  Math.sin(theta) * radius;
            /**вычисляем угол
             * TODO: 1 точки что то с координатами*/
            let degree = theta * 180 / Math.PI +30;
            return(
                <div key={index}
                     style={{
                        left: pointX ,
                        top: pointY,
                        width: iconSize+ 'px',
                        height: iconSize+ 'px'
                     }}
                     className="menuItem"
                     onClick={()=>{
                         this.setState({transform: degree})
                     }}
                >
                    {this.getIcon(item.icon)}<p>{item.title}</p>
                </div>
            )
        });
        return (items)
    }
    render() {
        const { size } = this.props;
        const mainMenuStyle = {
            width: size+'px',
            height: size+'px'
        };
        return (
            <div style={mainMenuStyle} className="mainMenu">
                <div className="menuItems">
                    { this.getMenuItems() }
                </div>
                <div style={{transform: `rotate(${this.state.transform}deg)`}} className="lineContainer">
                    <div className="lineWrapper">
                        <div className="overWrapper">
                            <div className="colorLinesLarge">
                                <div className="colorLinesSmall"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainRoundMenu;