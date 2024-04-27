import { Collapse, Nav } from "react-bootstrap";
import { UserType } from "../store/user/types";
import { NavLink, useLocation } from "react-router-dom";
import { FiActivity } from "react-icons/fi";
import { FaAngleDown, FaUser } from "react-icons/fa6";
import useState from "../hooks/useState";
import React from "react";

function SidebarComponent({auth}: {auth: UserType | null}) {
    const location = useLocation().pathname.split('/')[1];
    const [collapseEl, setCollapseEl] = useState<string | undefined>(location);

    React.useEffect(() => {
        setCollapseEl(location);
    }, [location]);

    return (
        <nav className='sidenav shadow-right sidenav-light'>
            <div className='sidenav-menu'>
                <Nav className='accordion'>
                    <div className='sidenav-menu-heading'>Menu</div>
                    <NavLink to={'/'} className='nav-link' end>
                        <div className='nav-link-icon'>
                            <FiActivity />
                        </div>
                        Dashboard
                    </NavLink>
                    {!auth ? 'no' : 
                        auth.role === 'Administrator' ? (
                            <>
                                <Nav.Link href='' className={`${collapseEl === 'users' ? '' : 'collapsed'}`} onClick={() => collapseEl === 'users' ? setCollapseEl(undefined) : setCollapseEl('users')}>
                                    <div className='nav-link-icon'>
                                        <FaUser />
                                    </div>
                                    Users
                                    <div className='sidenav-collapse-arrow'>
                                        <FaAngleDown />
                                    </div>
                                </Nav.Link>
                                <Collapse in={collapseEl === 'users'}>
                                    <Nav as='nav' className='sidenav-menu-nested accordion'>
                                        <NavLink to={'/users'} role='button' className='nav-link' tabIndex={0} end>List</NavLink>
                                        <NavLink to={'/users/add'} role='button' className='nav-link' tabIndex={0} end>Add</NavLink>
                                    </Nav>
                                </Collapse>
                            </>
                        ) : (
                            <>No</>
                        )
                    }
                </Nav>
            </div>
            <div className='sidenav-footer'>
                <div className='sidenav-footer-content'>
                    <div className='sidenav-footer-subtitle'>Logged in as:</div>
                    <div className='sidenav-footer-title'>{auth ? auth.role : 'Testing'}</div>
                </div>
            </div>
        </nav>
    );
}

export default SidebarComponent;