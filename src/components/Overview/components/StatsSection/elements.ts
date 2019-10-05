import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
  background-color: #fff;
  padding: 15px;  
`;

export const Header = styled.div`
  top: 0;
  left: 50%;
  width: 95%;
  position: absolute;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 4px;
  background: #fd9810;
  box-shadow: 0 12px 20px -10px rgba(255,165,115,0.28), 
              0 4px 20px 0 rgba(0, 0, 0, .12),
              0 7px 8px -5px rgba(255,165,115,0.2);
`;

export const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #d1d1d2;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const Section = styled.div`
  margin-right: 20px;
  width: 100%;
  
  &:last-child {
    margin-right: 0;
  }
`;

export const StatValue = styled.div`
  font-size: 15px;
  color: #757575;
`;

export const StatTitle = styled.div`
  font-size: 15px;
  color: #9e9e9e;
  text-transform: capitalize;
`;
