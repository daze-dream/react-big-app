import { render } from '@testing-library/react'
import React from 'react'
import './menu-item.styles.scss'

const MenuItem = (props) => {
    return(
        //dynamically changing values for scss styling and getting images. Pretty cool
        <div className={ props.size ? `${props.size} menu-item` : `menu-item`}>
            <div className="background-image" style= {{backgroundImage: `url(${props.imageUrl})`}}></div>
            <div className='content'>
                <h1 className ='title'>{props.title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;