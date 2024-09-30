import { memo } from 'react';
import { Container, ProgressBar, StyledImage, StyledP, TextWrapper, Wrapper } from './styles';
import { Column } from '../../molecules'
import loadingOne from '../../../assets/loading-one.png'
import loadingTwo from '../../../assets/loading-two.png'
import loadingThree from '../../../assets/loading-three.png'
import loadingLogo from '../../../assets/loading-logo.png'
import loadingText from '../../../assets/loading-title.png'
import { AnimatePresence, motion } from 'framer-motion'

function LoadingScreen(props) {
    return (
        <motion.div
            key="loading"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{
                y: '-200%',
                transition: {
                    delay: 0,
                    duration: 2
                },
            }}
            style={{ zIndex: 1000 }}
        >
            <Container {...props}>
                <Wrapper>
                    <ProgressBar id="progress-bar" value={props.$progress} max={props.$total} />
                    <TextWrapper>
                        <StyledP id="progress-text" />
                    </TextWrapper>
                </Wrapper>


            </Container>
        </motion.div>

    );
}


export default memo(LoadingScreen);
