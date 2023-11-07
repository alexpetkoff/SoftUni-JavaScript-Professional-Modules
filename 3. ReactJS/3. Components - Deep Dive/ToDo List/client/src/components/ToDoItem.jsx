export default function ToDoItem({id, text, isCompleted, changeStatusHandler}) {

    function changeStatus() {
        changeStatusHandler(id);
    }

    return (
        <tr className={`todo${isCompleted ? ' is-completed' : ''}`}>
            <td>{text}</td>
            <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
            <td className="todo-action">
                <button onClick={changeStatus} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );

}