import { Button, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { FiActivity, FiBell, FiLogOut, FiMail, FiMenu, FiSettings } from 'react-icons/fi';
import Profile from '../assets/assets/img/illustrations/profiles/profile-1.png';
import { UserType } from '../store/user/types';


function NavbarComponent() {
    const currentUser: UserType | null = null;
    function ToggleSidebar() {
        document.body.classList.toggle('sidenav-toggled');
    }
    return (
        <Navbar
            variant='light'
            expand
            bg='white'
            className='topnav shadow justify-content-between justify-content-sm-start'
            id='sidenavAccordion'
        >
            {/* <!-- Navbar Brand--> */}
            {/* <!-- * * Tip * * You can use text or an image for your navbar brand.--> */}
            {/* <!-- * * * * * * When using an image, we recommend the SVG format.--> */}
            {/* <!-- * * * * * * Dimensions: Maximum height: 32px, maximum width: 240px--> */}
            <Navbar.Brand>Hospital App</Navbar.Brand>
            {/* <!-- Sidenav Toggle Button--> */}
            <Button
                variant='icon'
                className='btn-transparent-dark order-1 order-lg-0 mr-lg-2'
                id='sidebarToggle'
                onClick={() => ToggleSidebar()}
            >
                <FiMenu />
            </Button>
            {/* <!-- Navbar Items--> */}
            <Nav className='align-items-center ml-auto'>
                {/* <!-- Alerts Dropdown--> */}
                <Dropdown className='nav-item no-caret d-none d-sm-block mr-3 dropdown-notifications'>
                    <Dropdown.Toggle
                        variant='icon'
                        className='btn-transparent-dark'
                        id='notification-dropdown'
                        aria-haspopup='true'
                    >
                        <FiBell />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu-right border-0 shadow animated--fade-in-up'>
                        <Dropdown.Header
                            as={'h6'}
                            className='dropdown-notifications-header'
                        >
                            <FiBell className='mr-2' />
                            Alert Center
                        </Dropdown.Header>
                        <Dropdown.Item className='dropdown-notifications-item'>
                            <div className='dropdown-notifications-item-icon bg-warning'>
                                <FiActivity />
                            </div>
                            <div className='dropdown-notifications-item-content'>
                                <div className='dropdown-notifications-item-content-details'>
                                    December 29, 2020
                                </div>
                                <div className='dropdown-notifications-item-content-text'>
                                    This is an alert message. It&apos;s nothing serious, but it
                                    requires your attention.
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-notifications-footer'>
                            View All Alerts
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <!-- Messages Dropdown--> */}
                <Dropdown className='nav-item no-caret d-none d-sm-block mr-3 dropdown-notifications'>
                    <Dropdown.Toggle
                        variant='icon'
                        className='btn-transparent-dark'
                        id='notification-dropdown'
                        aria-haspopup='true'
                    >
                        <FiMail />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu-right border-0 shadow animated--fade-in-up'>
                        <Dropdown.Header
                            as={'h6'}
                            className='dropdown-notifications-header'
                        >
                            <FiMail className='mr-2' />
                            Message Center
                        </Dropdown.Header>
                        <Dropdown.Item className='dropdown-notifications-item'>
                            <img className='dropdown-notifications-item-img' src={Profile} alt='Profile Image'/>
                            <div className='dropdown-notifications-item-content'>
                                <div className='dropdown-notifications-item-content-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </div>
                                <div className='dropdown-notifications-item-content-details'>
                                    Thomas Wilcox &#xB7; 58m
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item className='dropdown-notifications-footer'>
                            View All Messages
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <!-- User Dropdown--> */}
                <Dropdown className='nav-item no-caret mr-3 mr-lg-0 dropdown-user'>
                    <Dropdown.Toggle
                        variant='icon'
                        className='btn-transparent-dark'
                        id='user-dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        <img className='img-fluid' src={Profile} alt='Profile Image'/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu-right border-0 shadow animated--fade-in-up'>
                        <Dropdown.Header
                            as={'h6'}
                            className='d-flex align-items-center'
                        >
                            <img className='dropdown-user-img' src={Profile} alt='Profile Image'/>
                            <div className='dropdown-user-details'>
                                <div className='dropdown-user-details-name'>{currentUser ? (currentUser as UserType).name : 'Testing'}</div>
                                <div className='dropdown-user-details-email'>{currentUser ? (currentUser as UserType)._id : '00000000'}</div>
                            </div>
                        </Dropdown.Header>
                        <Dropdown.Divider/>
                        <Dropdown.Item>
                            <div className='dropdown-item-icon'>
                                <FiSettings/>
                            </div>
                            Account
                        </Dropdown.Item>
                        <Dropdown.Item >
                            <div className='dropdown-item-icon'>
                                <FiLogOut/>
                            </div>
                            Logout
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;