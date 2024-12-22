// src/types/index.ts

export interface ChatMessage {
    id: string;
    content: string;
    sender: 'user' | 'therapist';
    timestamp: Date;
}

export interface TherapistResponse {
    message: string;
    confidence: number;
}