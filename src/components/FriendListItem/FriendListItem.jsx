import {
  StyledAvatar,
  StyledItem,
  StyledName,
  StyledStatus,
} from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;

  return (
    <StyledItem>
      <StyledStatus isOnline={isOnline}></StyledStatus>
      <StyledAvatar src={avatar} alt={`${name} avatar`} width="48" />
      <StyledName>{name}</StyledName>
    </StyledItem>
  );
};
