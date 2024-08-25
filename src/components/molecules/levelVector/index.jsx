import * as S from './styles'

export const LevelVector = props => {
    return (
        <S.Wrapper
            $active={props.$active}
            $hover={props.idx === props.hoverIdx}
            onMouseEnter={() => props.setHover(props.idx)}
            onMouseLeave={() => props.setHover(null)}
            onClick={() => props.onLevelClick(props.item)}
            {...props}
        >
            {props.children}
        </S.Wrapper>
    );
}