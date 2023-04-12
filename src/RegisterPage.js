import React from "react";
import { useState } from "react";

function RegisterPage(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        alert("Dear " + firstName + " " + lastName + ",\nYour login details are - " + email + " : " + password);
    }

    function firstNameChangeHandler(event) {
        setFirstName(event.target.value);
    }

    function lastNameChangeHandler(event) {
        setLastName(event.target.value);
    }

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function switchFormHandler() {
        props.onFormSwitch('login');
    }

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type='text' value={firstName} onChange={firstNameChangeHandler} />
                <label htmlFor="lastName">Last Name</label>
                <input type='text' value={lastName} onChange={lastNameChangeHandler} />
                <label htmlFor="email">Email</label>
                <input type='email' value={email} onChange={emailChangeHandler} />
                <label htmlFor="password">Password</label>
                <input type='password' value={password} onChange={passwordChangeHandler} />
                <button className="submit-btn" type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={switchFormHandler}>Already have an account? Login here.</button>
        </div>
    )
}

export default RegisterPage;