import { Link } from 'react-router-dom';

export default function Catalog() {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {/* Display div: with information about every game (if any) */}
            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" alt="Game Cover" />
                    <h6>Action</h6>
                    <h2>Cover Fire</h2>
                    <Link to="#" className="details-button">Details</Link>
                </div>
            </div>

            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" alt="Game Cover" />
                    <h6>Action</h6>
                    <h2>Zombie Lang</h2>
                    <Link to="#" className="details-button">Details</Link>
                </div>
            </div>

            <div className="allGames">
                <div className="allGames-info">
                    <img src="./images/avatar-1.jpg" alt="Game Cover" />
                    <h6>Action</h6>
                    <h2>Minecraft</h2>
                    <Link to="#" className="details-button">Details</Link>
                </div>
            </div>

            {/* Display paragraph: If there are no games */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}
