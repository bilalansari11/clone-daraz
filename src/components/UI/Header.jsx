import './Header.css'
import darazLogo from '../../assets/logo.png'
import cartIcon from '../../assets/cart-icon.svg'
import searchIcon from '../../assets/search-icon.svg'

function Header() {
    return (
        <>
            <ul id='nav-links' className='flex justify-end items-center gap-10 pr-12 pt-1'>
                <li className='text-xs text-white'><a href="#">SAVE MORE ON APP</a></li>
                <li className='text-xs text-white'><a href="#">SELL ON DARAZ</a></li>
                <li className='text-xs text-white'><a href="#">HELP & SUPPORT</a></li>
                <li className='text-xs text-white'><a href="#">LOGIN</a></li>
                <li className='text-xs text-white'><a href="#">SIGN UP</a></li>
                <li className='text-xs text-white'><a href="#">زبان تبدیل کریں</a></li>
            </ul>
            <div id='header' className='flex items-center pt-6 p-8'>
                <img className='w-30 h-10 ml-10' src={darazLogo} alt="Logo" />
                <div className='flex justify-center items-center'>
                    <input id='input-bar' className='bg-white w-2xl ml-16 h-12 p-2' type="text" placeholder='Search in Daraz' />
                    <img id='search-icon' className='w-12 h-12 p-3' src={searchIcon} alt="search-icon" />
                </div>
                <img className='w-6 h-6 color-white ml-4' src={cartIcon} alt="cart-icon" />
            </div>
        </>
    )
}

export default Header;