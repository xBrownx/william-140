import React, {useState} from "react";
import {Container} from "./styles";
import { LevelButtons, LevelVectors } from "../../molecules";
import { AvailabilityModal } from "../availabilityModal";

export const AvailabilityOverlay = props => {
    const [hoverKey, setHoverKey] = useState(null)
    const [isModalOpen, setModalOpen] = React.useState(false);

    const [modalKey, setModalKey] = React.useState(null);

    const setHover = (key) => {
        console.log(key);
        setHoverKey(key);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const onLevelClick = (key) => {
        setModalKey(key);
        if(modalKey !== null) setModalOpen(true);
    }

    return (
        <Container>
            <AvailabilityModal
                $open={isModalOpen}
                modalKey={modalKey}
                setModal={setModalKey}
                closeModal={closeModal}
            />

            <LevelButtons
                hoverKey={hoverKey}
                setHover={setHover}
                onLevelClick={onLevelClick}
            />
            <LevelVectors
                hoverKey={hoverKey}
                setHover={setHover}
                onLevelClick={onLevelClick}
            />

        </Container>
    );
}