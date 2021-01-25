import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.button`
background: #4361ee;
height: 48px;
border-radius: 10px;
border: 0;       
padding: 0 16px; 
color: #fff;
//width: 100%;
font-weight: bold;
margin-top:16px;
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
  
`;
