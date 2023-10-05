import {  Nav, NavItem, NavLink, NavbarBrand,Modal,Button,DropdownMenu,DropdownItem } from "reactstrap";
import { useContext, useState } from "react";
import { routes } from "../../Routes/RoutePage"
import logo from '../../assets/movie-logo.png'
import './Navbar.css';
import { FaTimes,FaBars,FaSearch,FaBell,FaUserAlt } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { Context } from "../../Context/Context"
import { removeToken } from "../../Storage/Storage"
import { useNavigate } from "react-router"

export default function Navbar() {
    const [toggle,setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState(null);
    const [modal, setModal] = useState(false);
    const [isSubscribe,setIsSubscribe] = useState(false);
    const {inputRef,handleSearch} = useContext(Context);
    const navigate = useNavigate();

    const handleLinkClick = (link) => {
        setActiveLink(link)
    };
    const handleSearchClick = () => {
        setModal(!modal)
    };
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        handleSearch(); // Call the search function
        setModal(false);
    };
    const handleLogout = () => {
        removeToken();
        navigate('/')
    };
    return (
        <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid main--div">
                <NavbarBrand>
                    <img src={logo} alt="logo" className="logo--img"/> 
                </NavbarBrand>
                <div className="button--div">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" 
                onClick={() => setToggle(!toggle)}
                >
                {toggle ? <FaTimes/> : <FaBars/> }
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Nav navbar className="main--div">
                {routes.map((route,index) => {
                    return (
                        <NavItem key={index}>
                            <NavLink 
                            className={`nav--link ${activeLink === route.name ? 'active' : ''}`} 
                            href={route.path}
                            onClick={()=>handleLinkClick(route.name)}>{route.name}</NavLink>
                        </NavItem>
                    )
                })}
                </Nav>
                <div className="icons--div">
                    <div className="icons" onClick={handleSearchClick}><FaSearch/></div>
                    <div className="icons"><FaBell/></div>
                    <div className="icons dropdown">
                        <div className='dropdown-toggle' data-bs-toggle="dropdown"><FaUserAlt/></div>
                    <DropdownMenu className="dropdown-menu">
                    <DropdownItem className="dropdown-item" onClick={handleLogout}>Log out</DropdownItem>
                    </DropdownMenu>
                    </div>
                    {isSubscribe ?  <button className="subscribed">
                        <span className="me-1">Subscribed</span><FaBell/></button> :
                    <button className="subscribe" onClick={()=> setIsSubscribe(!isSubscribe)}>Subscribe Now</button>
                    }

                </div>
                </div>
            </div>
            {/*Modal Search bar */}
            <div>
            <Modal isOpen={modal} handleSearchClick={handleSearchClick}>
            <div className="modal-div">
            <div handleSearchClick={handleSearchClick}>
                <div className="header">
                <p className="movie-title text-white-50">Dive to a movie world...</p>
                <Button className="border-0 bg-transparent btn" onClick={handleSearchClick}>
                    <RxCross1/></Button>
                </div>
            </div>
            <form onSubmit={handleSearchSubmit}>
                <div className="modal-body">
                <input type="text" className="form-control bg-transparent text-white" ref={inputRef}
                />
                </div>
            </form>
            </div>
            </Modal>
            </div>
        </nav>
        </header>
       
    )
}