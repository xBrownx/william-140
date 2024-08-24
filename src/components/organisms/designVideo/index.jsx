import {Container} from "./styles";
import {PoppingLinkList, Row} from "../../molecules";
import {design as CONSTANTS} from '../../constants'
import {StyledButton} from "../../atoms/button/styles";

export const DesignVideo = props => {
    return (
        <Container>
            <Row>
                <PoppingLinkList items={CONSTANTS.menuItems} {...props} />
                <StyledButton>Start Tour</StyledButton>
            </Row>
        </Container>
    );
}