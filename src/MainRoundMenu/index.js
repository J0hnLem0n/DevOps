import React, { Component } from 'react';
import CodeIcon from '@material-ui/icons/Code';
import CheckIcon from '@material-ui/icons/PlaylistAddCheck';
import DeployIcon from '@material-ui/icons/CloudUpload';
import CommitIcon from '@material-ui/icons/Wc';
import InfoIcon from '@material-ui/icons/Info';
import './index.css';

class MainRoundMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: 30,
            menuItemClassActiveId: 0
        };
    }
    getIcon = (icon) => {
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
    toggleMenuItemClass() {
        const currentState = this.state.toggleMenuItemClassActive;
        this.setState({ toggleMenuItemClassActive: !currentState });
    };
    getMenuItems() {
        const { size, iconSize, menuItems, setPage } = this.props;
        const { menuItemClassActiveId } = this.state;
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
                     className={menuItemClassActiveId === index ? "rm-main-menu__item rm-main-menu__item_active" : "rm-main-menu__item"}
                     onClick={()=>{
                         setPage(item.id);
                         this.toggleMenuItemClass();
                         this.setState({transform: degree, menuItemClassActiveId: index})
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
            <div style={mainMenuStyle} className="rm-main-menu">
                <div className="rm-main-menu__items">
                    { this.getMenuItems() }
                </div>
                <div style={{transform: `rotate(${this.state.transform}deg)`}} className="rm-main-menu__line-container">
                    <div className="rm-main-menu__line-wrapper">
                        <div className="rm-main-menu__over-wrapper">
                            <div className="rm-main-menu__color-lines-large">
                                <div className="rm-main-menu__color-lines-small" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainRoundMenu;