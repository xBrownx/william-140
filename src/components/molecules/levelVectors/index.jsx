import { Container, VectorWrapper } from "./styles";
import { availability } from "../../../constants";
import { useHoverContext, useModalStatusContext } from "../../organisms/availabilityOverlay/context";

export const LevelVectors = props => {
    const lvlVectors = availability.assets.lvlVectors;
    const vectors = Object.keys(lvlVectors).map(key => {
        return {key: key, vector: lvlVectors[key].vector};
    });
    const [hoverKey, setHoverKey] = useHoverContext();
    const [isModalOpen, onLevelClick] = useModalStatusContext();

    return (
        <Container>
                {vectors.map((item) => {
                        return (
                            <VectorWrapper
                                key={item.key}
                                $hover={item.key === hoverKey}
                                offset={item.vector.positionTop}
                                onMouseEnter={() => setHoverKey(item.key)}
                                onMouseLeave={() => setHoverKey(null)}
                                onClick={() => onLevelClick(item.key)}
                            >
                                <item.vector.src />
                            </VectorWrapper>
                        );
                    }
                )}
        </Container>
    );
}