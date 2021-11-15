import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                  title: 'swords',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/swords'
                },
                {
                  title: 'spellbooks',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/spellbooks'
                },
                {
                  title: 'apothecary',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/apothecary'
                },
                {
                  title: 'guns',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/guns'
                },
                {
                  title: 'drip',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/drip'
                }
              ]
        }
    }
    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                    ))
                } 
                {/* 
                                {
                    this.state.sections.map(({id...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                } */}

            </div>
        )
    }
    
}

export default Directory;