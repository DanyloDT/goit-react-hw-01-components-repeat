import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 240px;
  padding: 10px;
  background-color: #ffffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background-color: ${(props) =>
    props.isOnline ? 'rgb(52, 213, 52)' : 'rgb(255, 70, 70)'};
`;

export const StyledAvatar = styled.img`
  object-fit: cover;
`;

export const StyledName = styled.p`
  font-weight: 600;
`;
