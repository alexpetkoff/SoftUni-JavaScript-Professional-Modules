import { useState } from "react";

export const ControlledForm = () => {
    const INITIAL_STATE = {
        username: '',
        password: '',
        gender: 'female',
        age: ''
    }

    const [user, setUser] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({
        username: '',
        password: '',
        age: ''
    });

    const onFormChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onResetForm = () => {
        setUser(INITIAL_STATE);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        onResetForm();
    }

    const checkErrors = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    }

    const validateField = (fieldName, value) => {
        if (!value) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [fieldName]: 'This field is required.',
            }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
        }
    };

    return (
        <>
            <h1>Controlled Form:</h1>
            <h3>Register Form</h3>

            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input onBlur={checkErrors} onChange={onFormChange} value={user.username} type="text" name="username" id="usernameControlled" />
                </div>
                {errors.username !== '' && (<b style={{ color: 'red' }}>{errors.username}</b>)}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input onBlur={checkErrors} onChange={onFormChange} value={user.password} type="password" name="password" id="passwordControlled" />
                </div>
                {errors.password !== '' && (<b style={{ color: 'red' }}>{errors.password}</b>)}
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select onChange={onFormChange} name="gender" id="gender" value={user.gender}>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={user.age}
                        onChange={onFormChange}
                        onBlur={checkErrors}
                    />
                </div>
                {errors.age !== '' && (<b style={{ color: 'red' }}>{errors.age}</b>)}
                <div>
                    <button type="submit" value="Register" >Register</button>
                    <button onClick={onResetForm} value="Reset">Reset</button>
                </div>
            </form>
        </>
    );
}