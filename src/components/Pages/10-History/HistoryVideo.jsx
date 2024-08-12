import video from "../../../assets/vid/10-History.mp4";
import React from "react";
import styled from "styled-components";

export const HistoryVideo = ({}) => {
    return (
        <Container>
            <Wrapper>
                <video loop muted controls={false}>
                    <source src={video} type="video/mp4"/>
                </video>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: var(--height-32px) var(--width-160px) 0 var(--width-160px)
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`