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
import { Image } from "../../atoms";


export const DesignVideo = memo(
    function DesignVideo(props) {
        const tour = props.tour;
        const menuItems = props.menuItems;
        const [currentShot, setCurrentShot] = useState("main-entry");
        const [videoSrc, setVideoSrc] = useState(menuItems["main-entry"].videoSrc);
        const [isLoading, setIsLoading] = useState(false);
        const videoRef = useRef(null);

        const startTour = () => {
            videoRef.current.scrollIntoView({ behavior: "smooth" });
            if (currentShot !== tour.key) {
                setIsLoading(true);
                setCurrentShot(tour.key);
                wait(200).then(() => {
                    setVideoSrc(tour.videoSrc);
                })
            }
        }

        const setShotChange = (shot) => {
            videoRef.current.scrollIntoView({ behavior: "smooth" });
            if (currentShot !== shot) {
                setIsLoading(true);
                setCurrentShot(shot);
                wait(200).then(() => {
                    setVideoSrc(menuItems[shot].videoSrc);
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
                        src={currentShot.videoSrc}
                    >
                    </StyledVideo>
                </VideoContainer>
                <Overlay style={{ justifyContent: "end" }}>
                    <MenuWrapper>
                        <StyledUl>
                            <StyledLi
                                $border
                                onClick={() => setCurrentShot(tour)}
                            >
                                <Row $centre padding={{right: 16}}>
                                    {/*<Image width={24} height={24} src={tour.iconSrc} />*/}
                                    <p>{tour.title}</p>
                                </Row>

                            </StyledLi>
                            {Object.keys(menuItems).map((key) => {
                                return (
                                    <StyledLi
                                        key={menuItems[key].key}
                                        onClick={() => setCurrentShot(menuItems[key])}
                                        $active={menuItems[key] === currentShot}
                                    >
                                        <p>
                                            {menuItems[key].title}
                                        </p>
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