import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './Statistics.js';
import FeedbackOptions from './FeedbackOptions.js';
import Notification from './Notification.js';

const SectionTitle = ({
  feedback,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <section>
      <h2>Please leave your feedback</h2>
      <FeedbackOptions feedback={feedback} />
      <h3>Statistics</h3>
      {total === 0 && <Notification message={'No feedback given'} />}
      {total > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      )}
    </section>
  );
};

export default SectionTitle;
SectionTitle.propTypes = {
  feedback: PropTypes.func.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
