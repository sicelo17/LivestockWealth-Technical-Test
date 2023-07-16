import logo from '../../assets/logo.svg'
import './navbar.css'
import '../../assets/bootstrap-icons.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <img src={logo} height='85' width='85' alt='Logo'/>
                </div>
                <div className='mobile'>
                    <span className='bi bi-cart3'>
                        <sup>1</sup>
                    </span>
                    <button className='navbar-toggle'>
                        <span className='bi bi-list'></span>
                    </button>
                </div>
                <div className='navbar-links'>
                    <div className='nav-links'>
                        <ul>
                            <li>
                                <a>Shop</a>
                            </li>
                            <li>
                                <a>Blog</a>
                            </li>
                            <li>
                                <a>Our Story</a>
                            </li>
                        </ul>
                    </div>
                    <div className='divider'>
                        |
                    </div>
                    <div className='nav-icons'>
                        <ul>
                            <li id='search'>
                                <a>
                                    <span className='bi bi-search'></span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className='bi bi-cart3'></span>
                                </a>
                            </li>
                            <li id='profile'>
                                <a>
                                    <span className='bi bi-person'></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar