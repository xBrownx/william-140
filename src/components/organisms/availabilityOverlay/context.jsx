import React, { createContext, useContext, useState } from "react";

const ModalKeyContext = createContext(null);
const HoverContext = createContext(null);
const ModalStatusContext = createContext(null);

export const AvailabilityProvider = ({ children }) => {
    const [hoverKey, setHoverKey] = useState(null)
    const [modalKey, setModalKey] = React.useState(null);
    const [isModalOpen, setModalOpen] = React.useState(false);
    const onLevelClick = (key) => {
        setModalKey(key);
        if (modalKey !== null) setModalOpen(true);
    }
    return (
        <ModalKeyContext.Provider value={[ modalKey, setModalKey ]}>
            <HoverContext.Provider value={[hoverKey, setHoverKey]}>
                <ModalStatusContext.Provider value={[isModalOpen, onLevelClick]}>
                    {children}
                </ModalStatusContext.Provider>
            </HoverContext.Provider>
        </ModalKeyContext.Provider>
    );
}

export const useModalKeyContext = () => useContext(ModalKeyContext);
export const useHoverContext = () => useContext(HoverContext);
export const useModalStatusContext = () => useContext(ModalStatusContext);