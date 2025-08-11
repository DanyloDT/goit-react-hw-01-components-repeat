import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

export const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;
  gap: 12px;
`;

export const StyledAvatar = styled.img`
  object-fit: cover;
  width: 120px;
  margin-bottom: 20px;
  border-radius: 50%;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

export const StyledName = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

export const StyledTag = styled.p`
  font-size: 14px;
  color: rgb(128, 123, 123);
`;

export const StyledLocation = styled.p`
  font-size: 16px;
  color: rgb(128, 123, 123);
`;

export const StyledStats = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 15px;
  border: 1px solid #d3d3d3;

  flex-basis: calc(100% / 3);
`;
