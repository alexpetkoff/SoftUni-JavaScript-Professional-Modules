import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Header() {
    const [showHide, setShowHide] = useState(false);

    const showModal = () => {
        setShowHide(!showHide);
    };

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">React Hooks - Demo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link onClick={showModal} href="#todo">New Todo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Modal show={showHide} onHide={showModal}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Todo</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Label htmlFor="inputPassword5">Todo text:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            id="text"
                            aria-describedby="text"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Enter new Todo above!
                        </Form.Text>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={showModal}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    );
}
