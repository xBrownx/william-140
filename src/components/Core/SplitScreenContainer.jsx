import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

const Pane = styled.div`
    flex: 1;
    align-items: center;
`

export const SplitScreenContainer = ({children}) => {
    const [left, right] = children
    return(
        <Container id="split-screen-container">
            <Pane id="split-screen-pane-left">
                {left}
            </Pane>
            <Pane id="split-screen-pane-right">
                {right}
            </Pane>
        </Container>
    );
}

