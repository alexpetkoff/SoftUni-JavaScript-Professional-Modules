import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({text, isComplete}) {
    return (
        <ListGroup.Item>{text} ---- Completed: {isComplete === false ? "No" : "Yes"}</ListGroup.Item>
    );
}