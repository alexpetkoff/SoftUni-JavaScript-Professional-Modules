import { useState, useEffect } from 'react';

export default function useForm(loginSubmitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues((values) => ({...values, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        loginSubmitHandler(values);
    }

    return {
        values,
        onChange,
        onSubmit
    }
}