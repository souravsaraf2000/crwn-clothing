import React from 'react';

import './menu-items.style.scss';

const MenuItems = ({title, ImageUrl, size}) => (
    <div className={`${size} menu-item`} >
        <div className="background-image" style={{
                backgroundImage: `url(${ImageUrl})`
            }}></div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItems;