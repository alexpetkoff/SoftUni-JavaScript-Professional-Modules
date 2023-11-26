import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../../services/gameServices.js';

export default function Catalog() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await getAll();
            setGames(Object.values(data));
        }
        getData();
    }, [])
    
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map((game) => {
                return (
                    <div key={game._id} className="allGames">
                        <div className="allGames-info">
                            <img src={game.imageUrl} alt="Game Cover" />
                            <h6>{game.title}</h6>
                            <h2>{game.category}</h2>
                            <Link to={`/games/details/${game._id}`} className="details-button">Details</Link>
                        </div>
                    </div>
                );
            })}

            {/* <h3 className="no-articles">No articles yet</h3> */}
        </section>
    );
}
