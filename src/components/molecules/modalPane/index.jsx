import React, {useEffect} from "react";
import {BackgroundOverlay, CloseButtonWrapper, Container, ModalWindow} from "./styles";
import {ReactComponent as Close} from "../../../assets/icons/Close.svg";


export const ModalPane = props => {

    useEffect(() => {
        if (typeof window != 'undefined' && window.document && props.$open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    })

    return (
        <>
            <BackgroundOverlay
                $open={props.$open}
                onClick={props.closeModal}
            />
            <ModalWindow $open={props.$open}>
                <CloseButtonWrapper >
                    <Close onClick={props.closeModal}/>
                </CloseButtonWrapper>
                {props.children}
            </ModalWindow>
        </>
    );
}