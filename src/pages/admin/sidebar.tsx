import { Collapse, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { FiActivity } from 'react-icons/fi';
import useState from '../../hooks/useState';
import React from 'react';
import { FaAngleDown, FaUserDoctor } from 'react-icons/fa6';
import { MdMeetingRoom } from 'react-icons/md';

function SidebarItems() {
    const location = useLocation().pathname.split('/')[2];
    const [collapseEl, setCollapseEl] = useState<string | undefined>(location);

    React.useEffect(() => {
        setCollapseEl(location);
    }, [location]);

    return (
        <Nav className='accordion'>
            <div className='sidenav-menu-heading'>Menu</div>
            <NavLink to={'/Administrator'} className='nav-link' end>
                <div className='nav-link-icon'>
                    <FiActivity />
                </div>
                Dashboard
            </NavLink>
            <NavLink to={'/Administrator/classrooms'} className='nav-link' end>
                <div className='nav-link-icon'>
                    <MdMeetingRoom />
                </div>
                Classroom
            </NavLink>
            {/* Begin Teacher */}
            <Nav.Link href='' className={`${collapseEl === 'teachers' ? '' : 'collapsed'}`} onClick={() => collapseEl === 'teachers' ? setCollapseEl(undefined) : setCollapseEl('teachers')}>
                <div className='nav-link-icon'>
                    <FaUserDoctor />
                </div>
                Teachers
                <div className='sidenav-collapse-arrow'>
                    <FaAngleDown />
                </div>
            </Nav.Link>
            <Collapse in={collapseEl === 'teachers'}>
                <Nav as='nav' className='sidenav-menu-nested accordion'>
                    <NavLink to={'/Administrator/teachers'} role='button' className='nav-link' tabIndex={0} end>List</NavLink>
                    <NavLink to={'/Administrator/teachers/add'} role='button' className='nav-link' tabIndex={0} end>Add</NavLink>
                </Nav>
            </Collapse>
            {/* End Teacher */}
            {/* Begin Student */}
            <Nav.Link href='' className={`${collapseEl === 'students' ? '' : 'collapsed'}`} onClick={() => collapseEl === 'students' ? setCollapseEl(undefined) : setCollapseEl('students')}>
                <div className='nav-link-icon'>
                    <FaUserDoctor />
                </div>
                Students
                <div className='sidenav-collapse-arrow'>
                    <FaAngleDown />
                </div>
            </Nav.Link>
            <Collapse in={collapseEl === 'students'}>
                <Nav as='nav' className='sidenav-menu-nested accordion'>
                    <NavLink to={'/Administrator/students'} role='button' className='nav-link' tabIndex={0} end>List</NavLink>
                    <NavLink to={'/Administrator/students/add'} role='button' className='nav-link' tabIndex={0} end>Add</NavLink>
                </Nav>
            </Collapse>
            {/* End Teacher */}
        </Nav>
    );
}

export default SidebarItems;