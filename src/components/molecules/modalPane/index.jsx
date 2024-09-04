import React, { useEffect } from "react";
import { BackgroundOverlay, CloseButtonWrapper, ModalWindow } from "./styles";
import { ReactComponent as Close } from "../../../assets/icons/Close.svg";
import { useModalStatusContext } from "../../organisms/availabilityOverlay/context";
import { memo } from "react";

export const ModalPane = memo(
    function ModalPane(props) {
        const [isModalOpen, onLevelClick] = useModalStatusContext();

        useEffect(() => {
            if (typeof window != 'undefined' && window.document && isModalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
        },)

        return (
            <>
                <BackgroundOverlay
                    $open={isModalOpen}
                    onClick={props.closeModal}
                />
                <ModalWindow $open={isModalOpen}>
                    <CloseButtonWrapper>
                        <Close onClick={props.closeModal} />
                    </CloseButtonWrapper>
                    {props.children}
                </ModalWindow>
            </>
        );
    }
);