import React, { createContext, useState } from "react";
import { Container } from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import { AvailabilityModal } from "../availabilityModal";
import { AvailabilityProvider } from "./context";


export const AvailabilityOverlay = props => {



    // const closeModal = () => {
    //     setModalOpen(false);
    // }



    return (
        <AvailabilityProvider>
            <Container>
                <AvailabilityModal />
                <LevelButtons />
                <LevelVectors />
            </Container>
        </AvailabilityProvider>
    );
}