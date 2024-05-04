import { Col, Container, Row } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import { FetchUsersFunction } from '../../../store/user/action';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

function Users() {
    const dispatch: Dispatch = useDispatch();
    FetchUsersFunction(dispatch);
    
    return (
        <main>
            <header className='page-header page-header-dark bg-gradient-primary-to-secondary pb-10'>
                <Container>
                    <div className='page-header-content pt-4'>
                        <Row className='align-items-center justify-content-between'>
                            <Col xs='auto' className=' mt-4'>
                                <h1 className='page-header-title'>
                                    <div className='page-header-icon'>
                                        <FaUser/>
                                    </div>
                                    Users
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
            <Outlet/>
        </main>
    );
}

export default Users;