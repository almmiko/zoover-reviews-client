import styled from 'styled-components';
import { device } from '../../../_common/Layout/media';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media ${device.tablet} {
    flex-direction: column;
    padding: 10px 0;
    
    button {
      margin-bottom: 5px;
    }
  }
`;

export const Title = styled.div`
  color: #757575;
  margin-right: 10px;
`;
