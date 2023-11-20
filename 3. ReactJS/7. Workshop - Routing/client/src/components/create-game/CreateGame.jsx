import { useEffect, useState } from "react";
import { createGame } from '../../services/gameServices';
import { useNavigate } from "react-router-dom";

export default function CreateGame() {
    const redirect = useNavigate('/');
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    })

    const onChangeHandler = (e) => {
        setGame({...game, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const result = await createGame(game);
        console.log(result);
        redirect('/');
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmitHandler}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="title">Legendary title:</label>
                    <input onChange={onChangeHandler} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input onChange={onChangeHandler} type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="maxLevel">MaxLevel:</label>
                    <input onChange={onChangeHandler} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="imageUrl">Image:</label>
                    <input onChange={onChangeHandler} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea onChange={onChangeHandler} name="summary" id="summary"></textarea>

                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}
