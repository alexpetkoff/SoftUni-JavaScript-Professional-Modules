import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({ text, isComplete }) {
    return (
            <ListGroup.Item>{text} ---- Completed: {isComplete === false ? "No" : "Yes"}
                <Button style={{marginLeft: "20px"}}>X</Button>
            </ListGroup.Item>
    );
}