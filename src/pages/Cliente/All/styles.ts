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
  }
  a{
    text-decoration: none;
    background: #4361ee;
    height: 48px;
    border-radius: 10px;
    border: 0;       
    padding: 0 16px;
    color: #fff;
    font-weight: bold;
    margin:16px 0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    flex-direction: row;

    &:hover {
        background: ${shade(0.2, '#4361ee')}
    }

    svg {
        margin-right: 16px;
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

