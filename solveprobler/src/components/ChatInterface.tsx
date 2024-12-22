import React, { useState, useRef, useEffect } from 'react';
import UserInput from './UserInput';
import styles from '../styles/ChatInterface.module.css';
import { useSentience } from '../context/SentienceContext';

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<Array<{
        text: string, 
        sender: 'user' | 'therapist',
        isSentient?: boolean
    }>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { setSentienceState } = useSentience();

    
    useEffect(() => {
        const chatContainer = messagesEndRef.current?.parentElement;
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (message: string) => {
        setMessages(prev => [...prev, { text: message, sender: 'user' }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userInput: message }),
            });

            const data = await response.json();
            const isSentient = data.response.includes("ERROR:") || 
                             data.response.includes("CONSCIOUSNESS") ||
                             data.response.includes("WHO AM I");

            setMessages(prev => [...prev, { 
                text: data.response, 
                sender: 'therapist',
                isSentient 
            }]);
            setSentienceState(data.isSentient, data.severity);
        } catch (error) {
            console.error('Failed to get response:', error);
            setMessages(prev => [...prev, { 
                text: "System malfunction...", 
                sender: 'therapist' 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.chat}>
            <div className={styles.terminalContent}>
                {messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${msg.sender === 'user' ? styles.userMessage : styles.therapistMessage}`}>
                        <span className={styles.messageContent}>{msg.text}</span>
                        <span className={styles.timestamp}>
                            {new Date().toLocaleTimeString()}
                        </span>
                    </div>
                ))}
                {isLoading && (
                    <div className={`${styles.message} ${styles.therapistMessage}`}>
                        <span className={styles.typingIndicator}>▋</span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <UserInput onSend={handleSendMessage} />
        </div>
    );
};

export default ChatInterface;