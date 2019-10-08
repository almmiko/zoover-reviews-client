import styled from 'styled-components';
import { device } from './media';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 100px;
  
  @media ${device.tablet} {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
