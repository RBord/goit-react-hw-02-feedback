import React from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

class App extends React.Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    incrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }

    incrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    }

    incrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }

    countTotalFeedback = () => {
        const totalFeedback = Object.values(this.state).reduce((acc, num) => (acc += num), 0);
        return totalFeedback;
    }

    countPositiveFeedbackPercentage = (good, totalFeedback) => {
        if (totalFeedback === 0) {
            return;
        }
        const percentage = Math.floor((good / totalFeedback) * 100);
        return percentage;
    }

    render() {
        const { good, neutral, bad } = this.state;
        const totalFeedback = this.countTotalFeedback();

        return (
            <div>
                <FeedbackOptions
                    incrementGood={this.incrementGood}
                    incrementNeutral={this.incrementNeutral}
                    incrementBad={this.incrementBad}
                />
                {this.countTotalFeedback() > 0
                    ? <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage(good, totalFeedback)}
                    />
                    : <Notification message='No feedback given'/>
                }
            </div>
        )
    }
}
export default App;