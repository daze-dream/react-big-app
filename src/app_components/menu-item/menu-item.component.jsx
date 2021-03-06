import { render } from '@testing-library/react'
import React from 'react'
import './menu-item.styles.scss'
import { withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    console.log(history)
    return(
        //dynamically changing values for scss styling and getting images. Pretty cool
        <div className={size ? `${size} menu-item` : `menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style= {{backgroundImage: `url(${imageUrl})`}}></div>
            <div className='content'>
                <h1 className ='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);