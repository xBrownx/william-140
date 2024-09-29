import { memo } from 'react';
import { Container, StyledImage, TextWrapper, Wrapper } from './styles';
import { Column } from '../../molecules'
import loadingOne from '../../../assets/loading-one.png'
import loadingTwo from '../../../assets/loading-two.png'
import loadingThree from '../../../assets/loading-three.png'
import loadingLogo from '../../../assets/loading-logo.png'
import loadingText from '../../../assets/loading-title.png'

function LoadingScreen(props) {
    return (
        <Container {...props}>
                <Wrapper>
                    <StyledImage src={loadingOne} alt="loading" />
                    <StyledImage src={loadingTwo} alt="loading" />
                    <StyledImage src={loadingThree} alt="loading" />
                    <StyledImage src={loadingLogo} />
                </Wrapper>
                {/*<TextWrapper>*/}
                {/*    <img src={loadingText} alt={""} />*/}
                {/*</TextWrapper>*/}

        </Container>
    );
}


export default memo(LoadingScreen);
