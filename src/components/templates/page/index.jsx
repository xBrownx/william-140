import { StyledPage } from './styles'

export const Page = props => {
  return(
    <StyledPage ref={props.pageRef} {...props}>
      {props.children}
    </StyledPage>
  );
}
