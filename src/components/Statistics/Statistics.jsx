import PropTypes from 'prop-types';
import { Stat } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div>
    <Stat>Good: {good}</Stat>
    <Stat>Neutral: {neutral}</Stat>
    <Stat>Bad: {bad}</Stat>
    <Stat>Total: {total}</Stat>
    <Stat>Positive feedback: {positivePercentage}%</Stat>
  </div>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
