import React from 'react';
import styled, {css} from "styled-components";
import * as CONSTANTS from "./Availability.constants";
import * as FontSize from '../../Styled/Font/FontSize'
import * as FontFamily from '../../Styled/Font/FontFamily'

export const ModalGeneric = ({heading, items}) => {
    console.log(items);
    return (
        <ModalContainer>
            <ModalContentContainer>
                <ModalTitleWrapper>
                    <Title>{heading}</Title>
                </ModalTitleWrapper>
                <ModalContentGeneric items={CONSTANTS.l33}/>
            </ModalContentContainer>
            <ModalRenderContainer>

            </ModalRenderContainer>
        </ModalContainer>
    );
};

const ModalContentGeneric = ({items}) => {
    return (
        <>
            <BlurbText>
                Fully refurbished - warm shell. Lift lobby, bathroom and on floor.
            </BlurbText>
            <ModalContentWrapper>
                {items !== null ? items.map((item, i) => (
                    <Row>
                        {item.variant
                            ? <BottomText>{item.title}</BottomText>
                            : <TopText >{item.title}</TopText>
                        }
                        <TopText $secondary>{item.value}</TopText>
                    </Row>
                    )
                ) : <></> }
            </ModalContentWrapper>
        </>
    );
}

const Row = ({children}) => {
    const [left, right] = children;
    return (
        <ModalRow>
            <ModalColumn>{left}</ModalColumn>
            <ModalColumn>{right}</ModalColumn>
        </ModalRow>

    );
}

const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const ModalTitleWrapper = styled.div`
    padding: 0 0 7.901vh 0;
`

const ModalContentContainer = styled.div`
    width: 38%;
    height: 100%;
    padding: 7.407vh 0 0 4.444vw;
`

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const ModalRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 0 0.988vh 0;
`

const ModalColumn = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const ModalRenderContainer = styled.div`
    width: 62%;
    height: 100%;
`

const Title = styled.h1`
    ${FontSize._36px};
    ${FontFamily.primaryLight};
    font-weight: 300;
    color: #162425;
`

const BlurbText = styled.p`
    ${FontSize._14px};
    ${FontFamily.secondaryRegular};
    font-weight: 400;
    color: #162425;
    padding: 0 0 2.963vh 0;
`

const TopText = styled.p`
    ${FontSize._14px};
    ${FontFamily.secondaryRegular};
    font-weight: 400;
    color: #164A49;

    ${props =>  props.$secondary && css`
        font-weight: 700;
        padding: 0 0 0 1.111vw;
    `}
    
    sup {
        font-size: small;
    }
`

const BottomText = styled.p`
    ${FontSize._14px};
    ${FontFamily.secondaryRegular};
    font-weight: 400;
    color: #000;
    opacity: 0.5;
`
