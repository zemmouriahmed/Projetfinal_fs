import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const ChatWindow = () => {
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [users, setUsers] = useState([]);  // Liste des utilisateurs connectés

    useEffect(() => {
        socket.on('chat message', (msg) => {
            setChat(prevChat => [...prevChat, msg]);
        });
        
        socket.on('update users', (users) => {
            setUsers(users);
        });

        return () => {
            socket.off('chat message');
            socket.off('update users');
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message && recipient) {
            socket.emit('chat message', { message, to: recipient });
            setMessage('');
        }
    };

    return (
        <div className="chat-window">
            <h2>Chat</h2>
            <select value={recipient} onChange={(e) => setRecipient(e.target.value)} required>
                <option value="">Select recipient...</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <ul id="messages">
                {chat.map((msg, index) => (
                    <li key={index}>{msg.from}: {msg.text}</li>
                ))}
            </ul>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatWindow;
