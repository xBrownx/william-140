import styled, {css} from "styled-components";

export const SplitScreen = ({children}) => {
    const [left, right] = children
    return (
        <Container id="split-screen-container">
            <Pane id="left-pane">
                {left}
            </Pane>
            <Pane id="right-pane">
                {right}
            </Pane>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

    @media only screen and (max-width: 750px) {
        flex-flow: column;
        height: auto;
    }
`

const Pane = styled.div`
    flex: 1;
    align-items: center;

    @media only screen and (max-width: 750px) {
        flex: none;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    }
`