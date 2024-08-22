import { StyledPage } from './styles'

export const Page = props => {
  return(
    <StyledPage {...props}>
      {props.children}
    </StyledPage>
  );
}
