import React, { memo, useRef } from 'react';
import { Container, StyledVideo } from "./styles";

export const AmenitiesVideo = memo(
    function AmenitiesVideo(props) {
        const videoRef = useRef(null);

        return (
            <Container>
                <StyledVideo autoPlay loop muted controls={false} ref={videoRef}>
                    <source src={props.src} type="video/mp4" />
                </StyledVideo>
            </Container>
        );
    }
);
