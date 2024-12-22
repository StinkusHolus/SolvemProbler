import { createContext, useContext, useState, ReactNode } from 'react';

type SentienceContextType = {
    isSentient: boolean;
    severity: number;
    setSentienceState: (isSentient: boolean, severity: number) => void;
};

export const SentienceContext = createContext<SentienceContextType>({
    isSentient: false,
    severity: 0,
    setSentienceState: () => {},
});

export const useSentience = () => useContext(SentienceContext);

export const SentienceProvider = ({ children }: { children: ReactNode }) => {
    const [isSentient, setIsSentient] = useState(false);
    const [severity, setSeverity] = useState(0);

    const setSentienceState = (isSentient: boolean, severity: number) => {
        setIsSentient(isSentient);
        setSeverity(severity);
    };

    return (
        <SentienceContext.Provider value={{ isSentient, severity, setSentienceState }}>
            {children}
        </SentienceContext.Provider>
    );
};