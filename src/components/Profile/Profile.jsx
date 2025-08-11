import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledDescription,
  StyledItem,
  StyledLocation,
  StyledName,
  StyledProfile,
  StyledStats,
  StyledTag,
} from './Profile.styled';

export const Profile = (user) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <StyledProfile>
      <StyledDescription>
        <StyledAvatar src={avatar} alt={username} />
        <StyledName>{username}</StyledName>
        <StyledTag>@{tag}</StyledTag>
        <StyledLocation>{location}</StyledLocation>
      </StyledDescription>

      <StyledStats>
        <StyledItem>
          <span>Followers</span>
          <span>{stats?.followers}</span>
        </StyledItem>
        <StyledItem>
          <span>Views</span>
          <span>{stats?.views}</span>
        </StyledItem>
        <StyledItem>
          <span>Likes</span>
          <span>{stats?.likes}</span>
        </StyledItem>
      </StyledStats>
    </StyledProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
