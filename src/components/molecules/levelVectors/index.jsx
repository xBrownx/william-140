import { Container, VectorWrapper } from "./styles";
import { useHoverContext, useModalStatusContext } from "../../organisms/availabilityOverlay/context";
import { Image } from "../../atoms";

export const LevelVectors = props => {
    const lvlVectors = props.assets.lvlVectors;
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
                                <Image src={item.vector.src}/>
                            </VectorWrapper>
                        );
                    }
                )}
        </Container>
    );
}