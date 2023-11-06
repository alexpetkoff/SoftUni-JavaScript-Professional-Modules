import Movie from "./Movie";

function MovieList(props) {

    let database = props.movies.map((movie) => 
        <Movie key={movie.title} data={movie}/>
    );

    return (
        <div>
            <h1>{props.heading}</h1>
            <ul>
                {database}
            </ul>
        </div>
    )
}

export default MovieList;