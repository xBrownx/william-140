import {Container} from "./styles";
import {Availability} from "../../constants";
import {LevelVector} from "../levelVector";

export const LevelVectors = props => {

    return (
        <Container>
            {Availability.buttons.map((item) => {
                return (
                    <LevelVector
                        isActive={item.isActive}
                        key={item.lvl}
                        idx={item.lvl}
                        item={item}
                        top={item.vectorTop}
                        left={item.vectorLeft}
                        height={item.vectorHeight}
                        hoverIdx={props.hoverIdx}
                        setHover={props.setHover}
                        onLevelClick={props.onLevelClick}
                    >
                        {item.lvlVector}
                    </LevelVector>
                );}
            )}
        </Container>
    );
}