import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  height : 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  place-content: center;
  width: 100%;

  form {

      margin: 80px 0;
      width: 500px;
      text-align: center;

       h1 {
           margin-bottom:24px;       
       }
      
       a{
           display:block;
           color: #aaa;
           font-weight: 500;
           margin-top:16px;
           transition: color 0.2s;

            svg {
                margin-right: 16px;
            }

           &:hover {
               color: ${shade(0.2, '#aaa')}
           }
       }
  }
`;

