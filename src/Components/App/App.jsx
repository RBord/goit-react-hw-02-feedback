import React from 'react';

// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import Statistics from '../Statistics/Statistics';

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    increment = () => {
        this.setState(prevState => {
            return {
                
            }
        })
    }

    render() {
        return (
            <section>
                <div>
                    <h1>Please leave feedback</h1>
                    <div>
                        <button type='button' onClick={this.increment}>Good</button>
                        <button type='button' onClick={this.increment}>Neutral</button>
                        <button type='button' onClick={this.increment}>Bad</button>
                    </div>
                </div>
                <div>
                    <h1>Statistics</h1>
                    <div>
                        <p>Good: {this.state.good}</p>
                        <p>Neutral: {this.state.neutral}</p>
                        <p>Bad: {this.state.bad}</p>
                    </div>
                </div>
            </section>
        )
    }
}
export default App;