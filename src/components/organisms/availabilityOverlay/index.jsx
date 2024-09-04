import React, { memo } from "react";
import { Container } from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import { AvailabilityModal } from "../availabilityModal";
import { AvailabilityProvider } from "./context";


export const AvailabilityOverlay = memo(
    function AvailabilityOverlay() {
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
);