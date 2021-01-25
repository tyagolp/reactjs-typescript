import styled from 'styled-components';
import { shade } from 'polished'

export const Container = styled.table`
    background: transparent;
    width: 100%;
    border-collapse:collapse;

    thead {
      font-weight:600;
    }

    td, th{
      padding:10px;
      outline: 1px solid #fff;
    }

    button{
      background: #4361ee;
      padding: 3px;
      margin: 0 2px;
      border: 0;       
      border-radius: 2px;
      transition: background-color 0.2s;

      &:hover {
          background: ${shade(0.2, '#4361ee')}
      }
    }

  
`;
