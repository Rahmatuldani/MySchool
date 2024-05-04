import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { UserType } from "../../../../store/user/types";

interface Props {
    open: boolean;
    handleClose: () => void;
    data: UserType;
}

function DetailUser({
    open,
    handleClose,
    data
}: Props) {
    return (
        <Modal
            show={open}
            onHide={handleClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>User Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group as={Row} controlId="username">
                    <Form.Label column sm="3">NIP/NISN</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.username}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="name">
                    <Form.Label column sm="3">Name</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.name}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="gender">
                    <Form.Label column sm="3">Gender</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.gender}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="role">
                    <Form.Label column sm="3">Role</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.role}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="address">
                    <Form.Label column sm="3">Address</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.address}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="phone">
                    <Form.Label column sm="3">Phone</Form.Label>
                    <Col sm="9">
                        <Form.Control plaintext readOnly defaultValue={data.phone}/>
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailUser;