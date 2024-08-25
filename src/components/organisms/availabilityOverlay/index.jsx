import React, {useState} from "react";
import { LevelButtons, LevelVectors } from "../../molecules";
import {Container} from "./styles";
import {AvailabilityModal} from "../availabilityModal";
import {Availability} from "../../constants";

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

    const onClick = (modal) => {
        setModalItem(modal);
        setModalOpen(true);
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
                onClick={onClick}
            />
            <LevelVectors
                hoverIdx={isHoverIdx}
                setHover={setHover}
                onClick={onClick}
            />

        </Container>
    );
}