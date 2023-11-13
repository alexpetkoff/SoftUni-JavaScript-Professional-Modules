import { useState } from "react";

export const ControlledForm = () => {

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const onFormChange = (e) =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });       
    }

    const onResetForm = () => {
        setUser({
            username: '',
            password: ''
        });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(user);
    }

    return (
        <>
            <h1>Controlled Form:</h1>
            <h3>Register Form</h3>

            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onChange={onFormChange} value={user.username} type="text" name="username" id="usernameControlled" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onChange={onFormChange} value={user.password} type="password" name="password" id="passwordControlled" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                    <button onClick={onResetForm} value="Reset">Reset</button>
                </div>
            </form>
        </>
    );
}