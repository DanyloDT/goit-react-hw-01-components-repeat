import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledLabel,
  StyledPercentage,
  StyledStatistics,
  StyledStatList,
  StyledTitle,
} from './Statistics.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, stats = [] }) => {
  return (
    <StyledStatistics>
      <StyledTitle style={{ backgroundColor: getRandomHexColor() }}>
        {title}
      </StyledTitle>

      <StyledStatList>
        {stats.map(({ id, label, percentage }) => (
          <StyledItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <StyledLabel>{label}</StyledLabel>
            <StyledPercentage>{percentage}</StyledPercentage>
          </StyledItem>
        ))}
      </StyledStatList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
