import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  margin-top: 60px;
  margin-left: 20px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .14);
  background-color: #fff;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > div {
    margin-right: 20px;
  }
`;
