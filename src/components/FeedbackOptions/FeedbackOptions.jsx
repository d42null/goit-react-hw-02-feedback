import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsList>
    {options.map(option => (
      <li key={option}>
        <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
      </li>
    ))}
  </OptionsList>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
