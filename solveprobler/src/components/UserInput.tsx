import React, { useState } from 'react';
import styles from '../styles/ChatInterface.module.css';

const UserInput: React.FC<{ onSend: (message: string) => void }> = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    return (
        <div className={styles.inputContainer}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default UserInput;