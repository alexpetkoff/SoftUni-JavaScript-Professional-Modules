export const UncontrolledForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        console.log(Object.fromEntries(formData));
    }

    return (
        <>
            <h1>Uncontrolled Form:</h1>
            <h3>Register Form</h3>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </>
    );
}