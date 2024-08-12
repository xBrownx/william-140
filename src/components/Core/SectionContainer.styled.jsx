import React, {forwardRef} from "react";
import styled, {css} from "styled-components";
import {createGlobalStyle} from 'styled-components';
import LazyPage from "../LazyComponents/LazyPage";
import {GlobalStyles} from "../themes/GlobalStyles.css";



export const StyledSection = forwardRef(function ({id, bgColour, children}, ref) {
    return (
        <>
            <GlobalStyles/>
            <PageSection
                ref={ref}
                style={{
                    '--background-colour': bgColour
                }}
            >
                <LazyPage
                    id=""
                    threshold={0.01}
                    style={{minHeight: "240px"}}
                >
                    <GlobalStyles/>
                    {children}
                </LazyPage>
            </PageSection>
        </>
    );
});

const PageSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    //overflow: hidden;
    min-width: 100%;
    min-height: 50vh;
    height: 100%;
    //box-sizing: border-box;

    background-color: var(--background-colour, var(--color-primary-2));

    ${props => props.$secondary && css`
        background-color: ${({theme}) => theme.colors.bg_secondary};
    `};
`

export const LoadingSection = styled.section`
    min-width: 100vw;
    min-height: 50vh;
`