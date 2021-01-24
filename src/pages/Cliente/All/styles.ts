import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 100%;

  > div {
      margin: 40px 0;
      width: 700px;
      text-align: center;

       h1 {
           margin-bottom:8px;       
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

export const ContentAlignRigth = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: flex-end;
  width: 100%;

`;

