import { Col, Container, Row } from "react-bootstrap";
import Image from '../../assets/assets/img/illustrations/404-error.svg';
import config from "../../config/config";

function NotFoundPage() {
    document.body.className = 'bg-white';

    return (
        <div id="layoutError">
            <div id="layoutError_content">
                <main>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <div className="text-center mt-4">
                                    <img className="img-fluid p-4" src={Image} alt='image' />
                                    <p className="lead">This requested URL was not found on this server.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
            <div id="layoutError_footer">
                <footer className="footer mt-auto footer-light">
                    <Container fluid>
                        <Row className="row">
                            <Col md={6} className="small">Copyright &#xA9; 2024 &#8226; {config.developer}</Col>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy </a>
                                &#8226;
                                <a href="#!"> Terms &amp; Conditions</a>
                            </div>
                        </Row>
                    </Container>
                </footer>
            </div>
        </div>
    );
}

export default NotFoundPage;