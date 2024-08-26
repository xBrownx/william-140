import {Container, Wrapper} from "./styles";
import {availability} from "../../constants";
import {LevelVector} from "../levelVector";

export const LevelVectors = props => {

    const buttons = [...availability.buttons].reverse();
    const buttonsTop = [...buttons].slice(0, 17)
    const buttonsBottom = [...buttons].slice(17)

    return (
        <Container>
            {/*<Wrapper $top>*/}
                {buttons.map((item) => {
                        return (
                            <LevelVector
                                $active={item.isActive}
                                key={item.lvl}
                                idx={item.lvl}
                                item={item}
                                offset={item.offset}
                                // top={item.vectorTop}
                                // left={item.vectorLeft}
                                // height={item.vectorHeight}
                                hoverIdx={props.hoverIdx}
                                setHover={props.setHover}
                                onLevelClick={props.onLevelClick}
                            >
                                {item.lvlVector}
                            </LevelVector>
                        );
                    }
                )}
            {/*</Wrapper>*/}
            {/*<Wrapper $bottom>*/}
            {/*    {buttonsBottom.map((item) => {*/}
            {/*            return (*/}
            {/*                <LevelVector*/}
            {/*                    $active={item.isActive}*/}
            {/*                    key={item.lvl}*/}
            {/*                    idx={item.lvl}*/}
            {/*                    item={item}*/}
            {/*                    offset={item.offset}*/}
            {/*                    // top={item.vectorTop}*/}
            {/*                    // left={item.vectorLeft}*/}
            {/*                    // height={item.vectorHeight}*/}
            {/*                    hoverIdx={props.hoverIdx}*/}
            {/*                    setHover={props.setHover}*/}
            {/*                    onLevelClick={props.onLevelClick}*/}
            {/*                >*/}
            {/*                    {item.lvlVector}*/}
            {/*                </LevelVector>*/}
            {/*            );*/}
            {/*        }*/}
            {/*    )}*/}
            {/*</Wrapper>*/}
        </Container>
    );
}