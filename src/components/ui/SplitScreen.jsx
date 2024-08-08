import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const Pane = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const SplitScreen = ({
    left: Left,
    right: Right
}) => {
    return(
        <Container>
            <Pane>
                <Left />
            </Pane>
            <Pane>
                <Right />
            </Pane>
        </Container>
    );
}

export default SplitScreen;