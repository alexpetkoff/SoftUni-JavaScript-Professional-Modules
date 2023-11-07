export default function ToDoItem({id, text, isCompleted, changeStatusHandler}) {

    function changeStatus() {
        changeStatusHandler(id);
    }
    
    if (isCompleted) {
        return (
            <tr className="todo is-completed">
                <td>{text}</td>
                <td>Complete</td>
                <td className="todo-action">
                    <button onClick={changeStatus} className="btn todo-btn">Change status</button>
                </td>
            </tr>
        );
    } else {
        return (
            <tr className="todo">
                <td>{text}</td>
                <td>Not Complete</td>
                <td className="todo-action">
                    <button onClick={changeStatus} className="btn todo-btn">Change status</button>
                </td>
            </tr>
        );
    }

}