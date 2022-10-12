
import React, { useState, useEffect } from 'react';
import QRCode from "react-qr-code";
import axios from 'axios';

function Register() {
    const [qrString, setQrString] = useState('');
    const [session, setSession] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    }, []);

    return (
        <>
            <h1>Register</h1>
            {loading && <p>Loading QR code...</p>}
            {error && <p>Error: {error}</p>}
            <input type="hidden" id="LA-session" value={session} />
            <QRCode value={qrString} />
        </>
    );
}

export default Register;