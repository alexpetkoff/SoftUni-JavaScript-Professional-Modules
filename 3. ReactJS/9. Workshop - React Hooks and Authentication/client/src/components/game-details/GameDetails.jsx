import React, { useEffect, useState } from 'react';
import { getOne } from '../../services/gameServices';
import { useParams } from 'react-router-dom';

export default function GameDetails() {

    const [game, setGame] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const request = async () => {
            const result = await getOne(id);

            setGame(result);
        }
        
        request();
    }, []);

    
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt="Game Cover" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for the current game (If any) */}
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    {/* Display paragraph: If there are no comments */}
                    <p className="no-comment">No comments.</p>
                </div>

                {/* Edit/Delete buttons ( Only for the creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which are not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment..."></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}
