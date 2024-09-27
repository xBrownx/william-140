import {
    ButtonWrapper,
    Container,
    ListWrapper,
    MapWrapper, MenuWrapper, Overlay,
    StyledLi,
    StyledUl,
    StyledVideo,
    VideoContainer
} from "./styles";
import { Column, PoppingLinkList, Row } from "../../molecules";
import { StyledButton } from "../../atoms/button/styles";
import { ReactComponent as Play } from '../../../assets/icons/Play.svg'
import { memo, useEffect, useRef, useState } from 'react'
import { wait } from "@testing-library/user-event/dist/utils";
import { Paragraph } from "../../atoms";


export const DesignVideo = memo(
    function DesignVideo(props) {
        const videos = props.assets.videos;
        const videoSrcArray = Object.keys(videos).map(key => videos[key].src);
        const [currentShot, setCurrentShot] = useState(0);
        const [videoSrc, setVideoSrc] = useState(videoSrcArray[0]);
        const [isLoading, setIsLoading] = useState(false);
        const videoRef = useRef(null);
        const setShotChange = (shot) => {

            videoRef.current.scrollIntoView({ behavior: "smooth" });
            if (currentShot !== shot) {
                setIsLoading(true);
                console.log("currentShot: ", currentShot, "shot: ", shot);
                setCurrentShot(shot);
                wait(200).then(() => {
                    setVideoSrc(videoSrcArray[shot]);
                })
            }
        }

        useEffect(() => {
            console.log("useEffect triggered")

            wait(500).then(() => {
                videoRef.current.play();
            })
            wait(500).then(() => {
                setIsLoading(false);
            })
        }, [currentShot]);


        return (
            <Container>
                <VideoContainer
                    $isLoading={isLoading}
                >
                    <StyledVideo
                        ref={videoRef}
                        muted
                        src={videoSrc}
                    >
                    </StyledVideo>
                </VideoContainer>
                <Overlay style={{ justifyContent: "end" }}>
                    <MenuWrapper>
                        <StyledUl>
                            <StyledLi $border>
                                <p>START TOUR</p>
                            </StyledLi>
                            {props.menuItems.map((item, i) => {
                                return (
                                    <StyledLi key={i}>
                                        <p>{item.title}</p>
                                    </StyledLi>
                                );
                            })}

                        </StyledUl>
                    </MenuWrapper>
                </Overlay>
            </Container>
        );
    }
);


// <ListWrapper style={{ flex: 1 }}>
//                         <PoppingLinkList
//                             setShotChange={setShotChange}
//                             currentShot={currentShot}
//                             items={props.menuItems}
//                             {...props}
//                         />
//                     </ListWrapper>
//                     <ButtonWrapper $visible={currentShot === 9}>
//                         <StyledButton
//                             $secondary
//                             fontSize={16}
//                             gap={10}
//                             onClick={() => setShotChange(9)}
//                         >
//                             <Play />
//                             Start Tour
//                         </StyledButton>
//                     </ButtonWrapper>


// {/*<MapWrapper style={{flex: 1, display: "flex", justifyContent: "end"}}>*/}
//                     {/*    <MainEntry />*/}
//                     {/*</MapWrapper>*/}