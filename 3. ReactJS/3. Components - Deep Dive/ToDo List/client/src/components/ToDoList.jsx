import { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then((res) => res.json())
            .then((data) => {
                const result = Object.values(data);
                setTodos(result);
            })
            .catch((err) => console.error(err.message))
    }, []);

    const changeStatusHandler = (id) => {
        setTodos(state => state.map(todo => 
            todo._id === id
                ? {...todo, isCompleted: !todo.isCompleted}
                : todo
        ));
    }

    return (
        <section className="todo-list-container">
            <h1>Todo List</h1>

            <div className="add-btn-container">
                <button className="btn">+ Add new Todo</button>
            </div>

            <div className="table-wrapper">

                {
                    /*            
                    <div className="loading-container">
                        <div className="loading-spinner">
                            <span className="loading-spinner-text">Loading</span>
                        </div>
                    </div>
                    */
                }

                <table className="table">
                    <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(todo => (
                                <ToDoItem 
                                    key={todo._id}
                                    id={todo._id}
                                    text={todo.text}
                                    isCompleted={todo.isCompleted}
                                    changeStatusHandler={changeStatusHandler}
                                />
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
}