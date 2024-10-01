import {
    ArrowWrapper,
    ButtonWrapper,
    Container, CustomHeading, CustomRow,
    ListWrapper,
    MapWrapper, MenuWrapper, MobileOverlay, Overlay,
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
import { useMobile } from "../../../hooks/useMobile";
import { ReactComponent as Arrow } from '../../../assets/icons/Up-Arrow.svg'

export const DesignVideo = memo(
    function DesignVideo(props) {
        const isMobile = useMobile();
        const tour = props.tour;
        const menuItems = props.menuItems;
        const [currentShot, setCurrentShot] = useState(tour);

        const [isLoading, setIsLoading] = useState(false);
        const videoRef = useRef(null);

        const mobileTour = {...tour, title: "TOUR"};

        const [mobileIdx, setMobileIdx] = useState(0);
        let menuArray = Object.keys(menuItems).map(key => {
            return menuItems[key];
        });

        menuArray = [mobileTour, ...menuArray];

        useEffect(() => {
            wait(500).then(() => {
                videoRef.current.play();
            })
            wait(500).then(() => {
                setIsLoading(false);
            })
        }, [currentShot]);


        const navLeft = () => {
            let idx = mobileIdx
            if (idx > 0) {
                idx--;
                setMobileIdx(idx);
            }
        }

        const navRight = () => {
            let idx = mobileIdx
            if (idx < menuArray.length - 1) {
                idx++;
                setMobileIdx(idx);
            }
        }

        return (
            <Container >
                <VideoContainer
                    $isLoading={isLoading}
                >
                    {!isMobile && <MapWrapper >
                        {currentShot.mapSrc !== undefined && <Image src={currentShot.mapSrc} />}
                    </MapWrapper >
                    }
                    <StyledVideo
                        ref={videoRef}
                        muted
                        src={isMobile ? menuArray[mobileIdx].videoSrc : currentShot.videoSrc}
                        autoPlay
                        controls={true}
                        onLoad={() => {
                            videoRef.current.play()
                        }}
                    >
                    </StyledVideo >

                </VideoContainer >
                <Overlay style={{justifyContent: "end"}} >
                    <MenuWrapper >
                        <StyledUl >
                            <StyledLi
                                $border
                                onClick={() => setCurrentShot(tour)}
                            >
                                <Row $centre padding={{right: 16}} >
                                    {/*<Image width={24} height={24} src={tour.iconSrc} />*/}
                                    <p >{tour.title}</p >
                                </Row >

                            </StyledLi >
                            {Object.keys(menuItems).map((key) => {
                                return (
                                    <StyledLi
                                        key={menuItems[key].key}
                                        onClick={() => setCurrentShot(menuItems[key])}
                                        $active={menuItems[key] === currentShot}
                                    >
                                        <p >
                                            {menuItems[key].title}
                                        </p >
                                    </StyledLi >
                                );
                            })}

                        </StyledUl >
                    </MenuWrapper >
                </Overlay >
                ${isMobile && <MobileOverlay >
                <CustomRow >
                    <ArrowWrapper
                        $left
                        $hidden={mobileIdx === 0}
                    >
                        <Arrow onClick={navLeft} />
                    </ArrowWrapper >
                    <CustomHeading >
                        {menuArray[mobileIdx].title}
                    </CustomHeading >
                    <ArrowWrapper
                        $right
                        $hidden={mobileIdx === menuArray.length - 1}
                    >
                        <Arrow onClick={navRight} />
                    </ArrowWrapper >
                </CustomRow >

            </MobileOverlay >

            }
            </Container >
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