import { ButtonWrapper, Container, ListWrapper, MapWrapper } from "./styles";
import { PoppingLinkList, Row } from "../../molecules";
import { StyledButton } from "../../atoms/button/styles";
import { ReactComponent as MainEntry } from '../../../assets/svg/Design-Main-Entry.svg'
import { ReactComponent as Play } from '../../../assets/icons/Play.svg'
import { memo } from 'react'

export const DesignVideo = memo(
    function DesignVideo(props) {
        return (
            <Container>
                <Row>
                    <ListWrapper style={{flex: 1}}>
                        <PoppingLinkList items={props.menuItems} {...props} />
                    </ListWrapper>
                    <ButtonWrapper>
                        <StyledButton $secondary fontSize={16} gap={10}>
                            <Play />
                            Start Tour
                        </StyledButton>
                    </ButtonWrapper>
                    <MapWrapper style={{flex: 1, display: "flex", justifyContent: "end"}}>
                        <MainEntry />
                    </MapWrapper>
                </Row>
            </Container>
        );
    }
);