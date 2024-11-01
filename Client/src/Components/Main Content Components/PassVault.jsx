import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import './passVault.css';

const PassVault = () => {
    const [platform, setPlatform] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState([]);
    const [viewedPasswords, setViewedPasswords] = useState(new Set()); // Track viewed passwords

    const SECRET_KEY = 'TheCurryGuy';

    useEffect(() => {
        // Retrieve stored credentials from localStorage
        const savedCredentials = localStorage.getItem('credentials');
        if (savedCredentials) {
            const decryptedCredentials = JSON.parse(savedCredentials).map(item => ({
                id: item.id,
                platform: item.platform,
                username: item.username,
                password: item.password // Store encrypted password directly
            }));
            setCredentials(decryptedCredentials);
        }
    }, []);

    const saveCredentials = (e) => {
        e.preventDefault();
        if (platform.trim() && username.trim() && password.trim()) {
            const newCredential = {
                id: credentials.length > 0 ? credentials[credentials.length - 1].id + 1 : 1, // Assign new ID
                platform,
                username,
                password: CryptoJS.AES.encrypt(password, SECRET_KEY).toString() // Store encrypted password
            };

            // Save new credential to localStorage
            const updatedCredentials = [...credentials, newCredential];
            localStorage.setItem('credentials', JSON.stringify(updatedCredentials));

            // Update the credentials state
            setCredentials(updatedCredentials);

            // Clear input fields
            setPlatform('');
            setUsername('');
            setPassword('');
        }
    };

    const deleteCredential = (id) => {
        const updatedCredentials = credentials.filter(cred => cred.id !== id);
        localStorage.setItem('credentials', JSON.stringify(updatedCredentials));
        setCredentials(updatedCredentials);
        setViewedPasswords(prev => {
            const newViewed = new Set(prev);
            newViewed.delete(id); // Remove view state for deleted credential
            return newViewed;
        });
    };

    const toggleViewPassword = (id) => {
        setViewedPasswords(prev => {
            const newViewed = new Set(prev);
            if (newViewed.has(id)) {
                newViewed.delete(id);
            } else {
                newViewed.add(id);
            }
            return newViewed;
        });
    };

    return (
        <div className="passvault">
            <h2>PassVault</h2>
            <form onSubmit={saveCredentials}>
                <input
                    type="text"
                    placeholder="Platform"
                    value={platform}
                    onChange={(e) => setPlatform(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Save</button>
            </form>
            <div className="credentials-list">
                <h3>Stored Credentials :</h3>
                {credentials.length > 0 ? (
                    credentials.map(cred => {
                        const decryptedPassword = CryptoJS.AES.decrypt(cred.password, SECRET_KEY).toString(CryptoJS.enc.Utf8);
                        return (
                            <div key={cred.id} className="credential-card">
                                <p><strong>Platform:</strong> {cred.platform}</p>
                                <p><strong>Username:</strong> {cred.username}</p>
                                <p><strong>Password:</strong> {viewedPasswords.has(cred.id) ? decryptedPassword : '****'}</p>
                                <button onClick={() => toggleViewPassword(cred.id)}>
                                    {viewedPasswords.has(cred.id) ? 'Hide' : 'View'}
                                </button>
                                <button onClick={() => deleteCredential(cred.id)}>Delete</button>
                            </div>
                        );
                    })
                ) : (
                    <p>No credentials stored.</p>
                )}
            </div>
        </div>
    );
};

export default PassVault;
