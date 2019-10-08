import styled from 'styled-components';
import { device } from '../../../_common/Layout/media';

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
  border-radius: 3px;
  position: relative;
  text-align: right;
  padding: 15px 40px 20px 15px;
  background-color: #fff;  
`;

export const Title = styled.div`
  color: #9e9e9e;
  font-size: 18px;
  
  @media ${device.laptop} {
    font-size: 12px;
  }
`;

export const Value = styled.div<{error: boolean}>`
  font-size: ${(props) => props.error ? '15px': '25px'};
  color: #757575;
`;

export const IconBox = styled.div`
  position: absolute;
  top: -30px;
  left: 25px;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(60deg, #66bb6a, #43a047);
  box-shadow: 0 12px 20px -10px rgba(76, 175, 80, .28), 
              0 4px 20px 0 rgba(0, 0, 0, .12),
              0 7px 8px -5px rgba(76, 175, 80, .2);
  
  i {
    font-size: 40px;
    color: #fff;
  }
  
  @media ${device.laptop} {
    padding: 15px;
  }
`;
