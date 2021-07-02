import React from 'react';
import Section from '../Section/Section';

const FeedbackOptions = ({incrementGood, incrementNeutral, incrementBad }) => (
    <div>
        <Section title='Please leave feedback'>
            <div>
                <button type='button' onClick={incrementGood}>Good</button>
                <button type='button' onClick={incrementNeutral}>Neutral</button>
                <button type='button' onClick={incrementBad}>Bad</button>
            </div>
        </Section>
    </div>
)
export default FeedbackOptions;