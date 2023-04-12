import React from "react";
import { useState } from "react";

function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert("Your login details are - " + email + " : " + password);
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function switchFormHandler() {
        props.onFormSwitch('register');
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type='email' value={email} onChange={emailChangeHandler} />
                <label htmlFor="password">Password</label>
                <input type='password' value={password} onChange={passwordChangeHandler} />
                <button className="submit-btn" type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={switchFormHandler}>Don't have an account? Register here.</button>
        </div>
    )
}

export default LoginPage;