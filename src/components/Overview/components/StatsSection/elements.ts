import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
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
`;

export const StatTitle = styled.div`
  font-size: 15px;
`;
