import { Container, VectorWrapper } from "./styles";
import { availability } from "../../constants";

export const LevelVectors = props => {
    const lvlVectors = availability.assets.lvlVectors;
    const vectors = Object.keys(lvlVectors).map(key => {
        return {key: key, vector: lvlVectors[key].vector};
    });


    return (
        <Container>
                {vectors.map((item) => {
                        return (
                            <VectorWrapper
                                key={item.key}
                                $hover={item.key === props.hoverKey}
                                offset={item.vector.positionTop}
                                onMouseEnter={() => props.setHover(item.key)}
                                onMouseLeave={() => props.setHover(null)}
                                onClick={() => props.onLevelClick(item.key)}
                            >
                                <item.vector.src />
                            </VectorWrapper>
                        );
                    }
                )}
        </Container>
    );
}