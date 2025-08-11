import styled from 'styled-components';

export const StyledStatistics = styled.section`
  width: 400px;
  margin: 0 auto;
`;

export const StyledTitle = styled.h2`
  padding: 28px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;
  background-color: #ffffff;
`;

export const StyledStatList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 10px;
  margin-bottom: 28px;
  flex-basis: calc(100% / 5);
  color: #ffffff;
`;

export const StyledLabel = styled.span`
  font-size: 14px;
`;

export const StyledPercentage = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
