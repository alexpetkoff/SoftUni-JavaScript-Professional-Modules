import { useEffect, useState } from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from "./TodoItem";

function TodoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(result => {
                setTodos(Object.values(result));
            });
    }, []);

    return (
        <ListGroup style={{ margin: "10px auto", width: "20%" }} variant="flush">
            <h1>ToDo List:</h1>
            {todos.map(todo => <TodoItem key={todo._id} {...todo}/>)}
        </ListGroup>
    );
}

export default TodoList;