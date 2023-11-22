import { useState } from 'react';
import useForm from '../hooks/useForm';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Header() {
    const {formValues, onChangeHandler} = useForm({
        text: '',
        isComplete: false
    });

    const [showHide, setShowHide] = useState(false);

    const showModal = () => {
        setShowHide(!showHide);
    };

    const submitTodo = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:3030/jsonstore/todos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });
        showModal();
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
                        <Form onSubmit={submitTodo}>
                            <Form.Label htmlFor="inputPassword5">Todo text:</Form.Label>
                            <Form.Control
                                onChange={onChangeHandler}
                                type='text'
                                name='text'
                                as="textarea"
                                rows={3}
                                id="text"
                                aria-describedby="text"
                            />
                            <Button style={{ margin: "5px auto" }} type="submit" variant="primary">Save changes</Button>
                        </Form>
                    </Modal.Body>

                </Modal.Dialog>
            </Modal>
        </>
    );
}
