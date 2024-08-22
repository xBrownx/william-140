import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  width: 100%;
  align-items: end;
  
  .flex{
    flex: 1; 
    display: flex;
  };
  
  .left {
    padding: 0 0 0 var(--width-32px); 
    justify-content: start;
  };
  
  .centre {
    justify-content: center;
  };
  
  .right {
    padding: 0 var(--width-32px) 0 0; 
    justify-content: end;
  };
`
