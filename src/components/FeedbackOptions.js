import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ feedback }) => {
  return (
    <>
      <button name="good" onClick={feedback}>
        Good
      </button>
      <button name="neutral" onClick={feedback}>
        Neutral
      </button>
      <button name="bad" onClick={feedback}>
        Bad
      </button>
    </>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  feedback: PropTypes.func.isRequired,
};
