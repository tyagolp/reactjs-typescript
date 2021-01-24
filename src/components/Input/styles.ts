import styled, {css} from 'styled-components';
import Tootip from '../Tootip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  
  border: 2px solid #232129;       
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px
  }

  ${
    props => props.isErrored &&  css`    
      border-color: #c53030;    
    `
  }
  ${
    props => props.isFocused &&  css`    
      color: #4361ee;
      border-color: #4361ee;     
    `
  }
  ${
    props => props.isFilled &&  css`    
      color: #4361ee;    
    `
  }

  input {           
      flex:1;
      background: transparent;
      border:0;
      color: #f4ede8;

      &::placeholder{
        color:#666360;
      }

    }

   svg {
      margin-right: 16px;
   }
`;


export const Error = styled(Tootip)`
    height:18px;
    svg {
       margin: 0;
    }

    span{
      background: #c53030;
      &::before{
          border-color: #c53030 transparent;
      }
    }
`
