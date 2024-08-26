import React, {Children, cloneElement} from 'react';
import * as Styled from './Modal.styled';
import {floorItems} from '../Availability.constants'
import {ReactComponent as Close} from "../../../../assets/icons/Close.svg";
import styled, {css} from 'styled-components';
import * as STYLED from "../../../Styled/GlobalStyles"
import {ReactComponent as Arrow} from "../../../../assets/icons/Down-Arrow.svg";
import {ModalProvider, useModal} from "./Modal.context";



const Modal = ({children}) => {
    const [openIdx, setOpenIdx] = React.useState(null);
    const close = () => setOpenIdx(null);
    const open = setOpenIdx;
    const items = floorItems;

    return (
        <ModalProvider value={{openIdx, close, open, items}}>
            {children}
        </ModalProvider>
    );
}

const Open = ({children, opens: opensWindowIdx}) => {
    const {open} = useModal();
    return cloneElement(children, {onClick: () => open(opensWindowIdx)});
}

const Nav = ({idx}) => {
    const {openIdx, open, close, items} = useModal();

    const selectLevel = (lvl) => {
        open(lvl);
    }

    const levelUp = (i) => {
        if (idx > 0) {
            selectLevel(idx - i);
        }
    }
    const levelDn = (i) => {
        if ((items.length - idx) > 1) {
            selectLevel(idx + i);
        }
    }

    return (
        <Container>
            <ArrowContainer
                $rotate
                $visible={idx> 0}
                onClick={() => levelUp(1)}
            >
                <Arrow/>
            </ArrowContainer>
            {
                openIdx > 1
                    ? <Button onClick={() => levelUp(2)}>
                        {items[idx - 2].lvlNum}
                    </Button>
                    : <ButtonBlank/>
            }
            {
                openIdx > 0
                    ? <Button onClick={() => levelUp(1)}>
                        {items[idx - 1].lvlNum}
                    </Button>
                    : <ButtonBlank/>
            }
            <Button $selected>{items[idx].lvlNum}</Button>
            {
                (items.length - idx) > 1
                    ? <Button onClick={() => levelDn(1)}>
                        {items[idx + 1].lvlNum}
                    </Button>
                    : <ButtonBlank/>
            }
            {
                (items.length - idx) > 2
                    ? <Button onClick={() => levelDn(2)}>
                        {items[idx + 2].lvlNum}
                    </Button>
                    : <ButtonBlank/>
            }
            <ArrowContainer
                $visible={(items.length - idx) > 1}
                onClick={() => levelDn(1)}
            >
                <Arrow/>
            </ArrowContainer>
        </Container>
    );

}

const Window = ({children, idx}) => {
    const {openIdx, close} = useModal();
    if (idx !== openIdx) return null;

    return (
        <>
            <Styled.Overlay onClick={close}/>
            <Styled.Modal $open={idx === openIdx}>
                <Styled.CloseWrapper onClick={close}>
                    <Close/>
                </Styled.CloseWrapper>

                {children}
            </Styled.Modal>
        </>
    );
}

Modal.Open = Open;
Modal.Window = Window;
Modal.Nav = Nav;

export default Modal;

const Button = styled.div`
    flex: 1;
    border: 1px solid white;
    ${STYLED.borderRadius}
    width: 64px;
    max-height: 64px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.$selected && css`
        color: #164A49;
        background-color: #FFFFFF;

        &:hover {
            cursor: default
        }
    `}
    &:hover {
        cursor: pointer;
    }
    
    animation: head 1000ms ease-in-out;
    
    
    @keyframes head {
        0% {opacity: 0}
        100% {opacity:1;}
    }
`

const ButtonBlank = styled.div`
    flex: 1;
    width: 64px;
    max-height: 64px;
`

const Container = styled.div`
    ${STYLED.flexColumn};
    height: 100%;
    gap: 16px;
    padding: 0 48px;
    justify-content: center;
`

const ArrowContainer = styled.div`
    opacity: 0;

    ${props => props.$rotate && css`
        transform: rotate(180deg);
    `};

    ${props => props.$visible && css`
        opacity: 1;

        &:hover {
            cursor: pointer;
        }
    `};
`