import styled from 'styled-components';

export const StyledTransactionHistory = styled.table`
  width: 580px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;
  border-collapse: collapse;
  border-style: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledTransactionHead = styled.thead`
  height: 32px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  background-color: rgb(39, 227, 161);
`;

export const StyledTransactionBody = styled.tr`
  height: 32px;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: rgb(14, 14, 14);
  background-color: rgb(233, 233, 55, 0.336);

  &:nth-child(2n) {
    background-color: rgba(78, 161, 238, 0.336);
  }
`;

export const StyledElement = styled.th`
  border: 1.5px solid #ffffff;
`;
