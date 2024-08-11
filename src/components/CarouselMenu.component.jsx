import styled from "styled-components";


export const CarouselMenu = ({carouselItems, setActiveIndex}) => {
    const slideTitles = carouselItems.map(item => {
        return item.title
    });

    const slideIcons = carouselItems.map(item => {
        return item.icon
    });

    return (
        <Container>
            <Wrapper>
                {slideIcons.map((Item, index) => (
                    <MenuItem key={index}>
                        <Item/><p onClick={() => setActiveIndex(index)}>{slideTitles[index]}</p>
                    </MenuItem>
                ))}
            </Wrapper>
        </Container>
    );
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: #FFF;
    padding: 1.975vh 2.222vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.278vw;
    align-items: center;

    p {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 1.975vh;
        opacity: 0.5;
    }

    svg {
        width: 2.222vw;
        height: 2.222vw;
    }

`