import React from 'react';

const ModalContext = React.createContext();

export const useModal = () => {
    const context = React.useContext(ModalContext);
    if(context === undefined) {
        throw new Error(
            "Context is undefined."
        );
    }
    return context;
}

export const ModalProvider = ({ children, value }) => {
    return (
        <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    )
}