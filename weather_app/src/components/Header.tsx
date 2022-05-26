import  { FC } from 'react'
import './Header.css'
const Header :FC=() =>{
    return (
        <header className='header'>
            <div className='header__logo'>
                <img className='logo__image' src='https://demo.themezy.com/system/resources/demo_themes/000/000/128//images/logo@2x.png' alt='' />
                <h1>NTL</h1>
            </div>
            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='list__item active'>
                        <a href='/' className='list__item-link'>Home</a>
                    </li>
                    <li className='list__item'>
                        <a href='/' className='list__item-link'>News</a>
                    </li>
                    <li className='list__item'>
                        <a href='/' className='list__item-link'>Live cameras</a>
                    </li>
                    <li className='list__item'>
                        <a href='/' className='list__item-link'>Photos</a>
                    </li>
                    <li className='list__item'>
                       <a href='/' className='list__item-link'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
