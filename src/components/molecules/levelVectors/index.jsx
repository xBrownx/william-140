import {Container, Wrapper} from "./styles";
import {Availability} from "../../constants";
import {LevelVector} from "../levelVector";

export const LevelVectors = props => {

    const buttons = [...Availability.buttons].reverse();
    const buttonsTop = [...buttons].slice(0, 17)
    const buttonsBottom = [...buttons].slice(17)

    return (
        <Container>
            <Wrapper $top>
                {buttonsTop.map((item) => {
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
            </Wrapper>
            <Wrapper $bottom>
                {buttonsBottom.map((item) => {
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
            </Wrapper>
        </Container>
    );
}