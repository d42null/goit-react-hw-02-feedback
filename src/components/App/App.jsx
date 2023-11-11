import { Component } from 'react';
import { Container } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  countTotalFeedback = () => this.total;
  countPositiveFeedbackPercentage = () =>
    this.total ? Math.round((this.state.good / this.total) * 100) : 0;
  onLeaveFeedback = e => {
    this.total++;
    this.setState(prevState => {
      const x = e.target.firstChild.data;
      return { [x]: prevState[x] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
