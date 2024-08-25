import React, {useState} from "react";
import { LevelButtons, LevelVectors } from "../../molecules";
import {Container} from "./styles";
import {AvailabilityModal} from "../availabilityModal";

export const AvailabilityOverlay = props => {
    const [isHoverIdx, setIsHoverIdx] = useState(null)
    const [isModalOpen, setModalOpen] = React.useState(false);

    const [modalItem, setModalItem] = React.useState(null);

    const setHover = (idx) => {
        setIsHoverIdx(idx);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const onLevelClick = (modal) => {
        setModalItem(modal);
        if(modalItem !== null) setModalOpen(true);
    }


    return (
        <Container>
            <AvailabilityModal
                $open={isModalOpen}
                modalItem={modalItem}
                setModal={setModalItem}
                closeModal={closeModal}
            />
            <LevelButtons
                hoverIdx={isHoverIdx}
                setHover={setHover}
                onLevelClick={onLevelClick}
            />
            <LevelVectors
                hoverIdx={isHoverIdx}
                setHover={setHover}
                onLevelClick={onLevelClick}
            />

        </Container>
    );
}