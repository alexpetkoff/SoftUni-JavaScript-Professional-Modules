export default function Movie(props) {

    return (
        <li>
            <h3>Title: {props.data.title}</h3>
            <p>Director: {props.data.director}</p>
            <p>Cast: {props.data.cast}</p>
        </li>
    );
}