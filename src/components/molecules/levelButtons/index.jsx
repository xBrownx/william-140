import {availability} from "../../constants";
import {LevelButton} from "../levelButton";
import React from "react";
import {Container, Wrapper} from "./styles";

export const LevelButtons = props => {
    const buttons = [...availability.buttons].reverse();
    const buttonsTop = [...buttons].slice(0, 17)
    const buttonsBottom = [...buttons].slice(17)
    return (
        <Container>
            <Wrapper $top>
                {buttonsTop.map((item) => {
                        return (
                            <LevelButton
                                active={item.isActive}
                                key={item.lvl}
                                item={item}
                                hoverIdx={props.hoverIdx}
                                setHover={props.setHover}
                                onLevelClick={props.onLevelClick}
                            >
                                {item.lvl ? item.lvl : null}
                            </LevelButton>
                        );
                    }
                )}
            </Wrapper>

            <Wrapper $bottom>
                {buttonsBottom.map((item) => {
                        return (
                            <LevelButton
                                active={item.isActive}
                                key={item.lvl}
                                item={item}
                                hoverIdx={props.hoverIdx}
                                setHover={props.setHover}
                                onLevelClick={props.onLevelClick}
                            >
                                {item.lvl ? item.lvl : null}
                            </LevelButton>
                        );
                    }
                )}
            </Wrapper>
        </Container>
    );
}