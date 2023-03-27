import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import css from './FeedbackMain.module.css';

const feedbackStatistics = ['good', 'neutral', 'bad'];

class FeedbackMain extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  chackFeedback = () => {
    return Object.values(this.state).some(i => i > 0);
  };
  //   handleClickOnGood = () => {
  //     this.setState((prev) => ({good: prev.good + 1}))
  //   }

  //   handleClickOnNeutral = () => {
  //     this.setState((prev) => ({neutral: prev.neutral + 1}))
  //   }

  //   handleClickOnBad = () => {
  //     this.setState((prev) => ({bad: prev.bad + 1}))
  //   }

  handleClick = value => {
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
  return values.reduce((acc, value) => acc + value);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? '0' : Math.round((good / total) * 100);
  };

  render() {
    return (
      <div className={css.main}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackStatistics}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackMain;
