import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <ul className={css.statistics__list}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}</li>
      </ul>
    );
  }
  Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };
    
  

