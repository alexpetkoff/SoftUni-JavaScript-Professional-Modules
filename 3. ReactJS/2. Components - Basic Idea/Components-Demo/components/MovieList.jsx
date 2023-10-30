import Movie from "./Movie";

function MovieList(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            <ul>
                <Movie data={props.movies[0]}/>
                <Movie data={props.movies[1]}/>
                <Movie data={props.movies[2]}/>
            </ul>
        </div>
    )
}

export default MovieList;