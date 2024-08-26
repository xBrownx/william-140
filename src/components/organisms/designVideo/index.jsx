import {ButtonWrapper, Container, ListWrapper, MapWrapper} from "./styles";
import {PoppingLinkList, Row} from "../../molecules";
import {design as CONSTANTS} from '../../constants'
import {StyledButton} from "../../atoms/button/styles";
import {ReactComponent as MainEntry} from '../../../assets/svg/main entry.svg'
import { ReactComponent as Play } from '../../../assets/svg/play_arrow.svg'
export const DesignVideo = props => {
    return (
        <Container>
            <Row>
                <ListWrapper style={{flex: 1}}>
                    <PoppingLinkList items={CONSTANTS.menuItems} {...props} />
                </ListWrapper>
                <ButtonWrapper >
                    <StyledButton $secondary fontSize={16} gap={10}>
                        <Play />
                        Start Tour
                    </StyledButton>
                </ButtonWrapper>
                <MapWrapper style={{flex: 1, display: "flex", justifyContent: "end"}}>
                    <MainEntry/>
                </MapWrapper>
            </Row>
        </Container>
    );
}