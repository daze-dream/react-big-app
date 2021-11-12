import react from 'react'
import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage'> 
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className ='title'>Swords</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className ='title'>Spellbooks</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className ='title'>Apothecary</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className ='title'>Guns</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className ='title'>Drip</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;