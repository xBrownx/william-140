import React, { memo } from "react";
import { Container } from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import AvailabilityModal from "../availabilityModal";
import { AvailabilityProvider } from "./context";


export const AvailabilityOverlay = memo(
    function AvailabilityOverlay(props) {
        return (
            <AvailabilityProvider>
                <Container>
                    <AvailabilityModal
                        buttons={props.buttons}
                        assets={props.assets}
                    />
                    <LevelButtons
                        buttons={props.buttons}
                    />
                    <LevelVectors
                        assets={props.assets}
                    />
                </Container>
            </AvailabilityProvider>
        );
    }
);