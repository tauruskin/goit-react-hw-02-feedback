import React, { Component } from 'react';
import SectionTitle from './SectionTitle.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getFeedback = e => {
    e.persist();
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => acc + item);
  };
  countPositiveFeedbackPercentage = (totalValue, PositiveValue) => {
    return ((PositiveValue / totalValue) * 100).toFixed(1);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(
      total,
      this.state.good,
    );
    return (
      <>
        <SectionTitle
          good={good}
          neutral={neutral}
          bad={bad}
          feedback={this.getFeedback}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
export default App;
