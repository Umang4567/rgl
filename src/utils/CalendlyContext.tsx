import React, { createContext, useContext, useState } from 'react';

interface CalendlyContextType {
    isCalendlyOpen: boolean;
    openCalendly: () => void;
    closeCalendly: () => void;
}

const CalendlyContext = createContext<CalendlyContextType | undefined>(undefined);

export const CalendlyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    const openCalendly = () => setIsCalendlyOpen(true);
    const closeCalendly = () => setIsCalendlyOpen(false);

    return (
        <CalendlyContext.Provider value={{ isCalendlyOpen, openCalendly, closeCalendly }}>
            {children}
        </CalendlyContext.Provider>
    );
};

export const useCalendly = () => {
    const context = useContext(CalendlyContext);
    if (context === undefined) {
        throw new Error('useCalendly must be used within a CalendlyProvider');
    }
    return context;
}; 