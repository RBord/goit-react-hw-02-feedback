import React from 'react';

// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';

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
        const total = Object.values(this.state).reduce((acc, num) => (acc += num), 0);
        return total
    }

    countPositiveFeedbackPercentage = (good, total) => {
        if (total === 0) {
            return;
        }
        const percentage = Math.floor((good / total) * 100);
        return percentage;
    }

    render() {
        const { good, neutral, bad } = this.state;
        const feedbacksTotal = this.countTotalFeedback();
        const feedbacksGoodPersntg = this.countPositiveFeedbackPercentage(good, feedbacksTotal);

        return (
            <section>
                <div>
                    <h1>Please leave feedback</h1>
                    <div>
                        <button type='button' onClick={this.incrementGood}>Good</button>
                        <button type='button' onClick={this.incrementNeutral}>Neutral</button>
                        <button type='button' onClick={this.incrementBad}>Bad</button>
                    </div>
                </div>
                <div>
                    <h1>Statistics</h1>
                    <div>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Total: {feedbacksTotal}</p>
                        <p>Positive feedback: {feedbacksGoodPersntg} %</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default App;