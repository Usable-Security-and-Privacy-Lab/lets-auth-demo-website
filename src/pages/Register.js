
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import axios from 'axios';
import "../App.css";

function Register() {
    const [qrString, setQrString] = useState('');
    const [session, setSession] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isEnable, setEnable] = useState(true);

    const handleKeyUp = () => {
        if (username.length > 0 && password.length > 0) setEnable(false);
        else setEnable(true);
    };

    const handleSubmit = (username, password) => {
        console.log(username, password);
        console.log("session" + session);
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `/la3/session/register`
                );
                const sessionObject = {
                    "session": response.data.session,
                    "signature": response.data.signature,
                }
                const sessionString = JSON.stringify(sessionObject);
                setSession(sessionString);
                setQrString(sessionString);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [handleSubmit]);

    return (
        <div className="formCenter">
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit} className="formFields">
                <div className="formFiled">
                    <label className="formFieldLabel">Full Name</label>
                    <input 
                        type="text"
                        id="name"
                        className="formFieldInput"
                        placeholder="Enter your full name"
                        value={name}
                        onKeyUp={handleKeyUp}
                        onChange={(event) => setName(event.target.value)}
                        
                    />
                </div>
                <div className="formFiled">
                    <label className="formFieldLabel">Username</label>
                    
                    <input 
                        type="text"
                        id="username-input"
                        className="formFieldInput"
                        placeholder="Enter your username"
                        value={username}
                        onKeyUp={handleKeyUp}
                        onChange={(event) => setUsername(event.target.value)}
                        
                    />
                </div>
                 <div className="formFiled">
                    <label className="formFieldLabel">Password</label>
                    <input 
                        type="password"
                        id="password-input"
                        placeholder="Enter your password"
                        className="formFieldInput"
                        onKeyUp={handleKeyUp}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="formField">
                    <button
                        className="formFieldButton"
                        type="submit"
                        id="button-input"
                        disabled={isEnable}
                        onClick={()=> handleSubmit(username, password)}
                    >
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;

// {loading && <p>Loading QR code...</p>}
// {error && <p>Error: {error}</p>}
// <input type="hidden" id="LA-session" value={session} />
// <QRCode value={qrString} />