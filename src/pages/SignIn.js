
import React, { useState } from "react";

function Login() {
    const handleSubmit = (username, password) => {
        console.log(username, password);
    };
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );

}

function LoginForm({onSubmit}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);

    const handleKeyUp = () => {
        if (username.length > 0 && password.length > 0) setEnable(false);
        else setEnable(true);
    };


    return (
        <div>
            <label>Username</label>
            <input 
                type="text"
                id="username-input"
                placeholder="username"
                value={username}
                onKeyUp={handleKeyUp}
                onChange={(event) => setUsername(event.target.value)}
            />
            <label>Password</label>
            <input 
                type="password"
                id="password-input"
                placeholder="Password"
                onKeyUp={handleKeyUp}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button
                type="submit"
                id="button-input"
                disabled={isEnable}
                onClick={()=> onSubmit(username, password)}
            >
                Login
            </button>
        </div>
    );
}

export default Login;