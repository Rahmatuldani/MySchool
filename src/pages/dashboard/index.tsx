import { Col, Container, Row } from "react-bootstrap";
import { FiActivity } from "react-icons/fi";

function Dashboard() {
    return (
        <main>
            <header className='page-header page-header-dark bg-gradient-primary-to-secondary pb-10'>
                <Container>
                    <div className='page-header-content pt-4'>
                        <Row className='align-items-center justify-content-between'>
                            <Col xs='auto' className=' mt-4'>
                                <h1 className='page-header-title'>
                                    <div className='page-header-icon'>
                                        <FiActivity />
                                    </div>
                                    Dashboard
                                </h1>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>
        </main>
    );
}

export default Dashboard;