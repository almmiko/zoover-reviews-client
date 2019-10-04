import React from 'react';
import StatsSection from './components/StatsSection/StatsSection';
import Rating from './components/Rating/Rating';
import { Wrapper } from './elements';

class Overview extends React.Component<any> {
    render() {
        return (
            <Wrapper>
                <Rating />
                <StatsSection />
                <StatsSection />
            </Wrapper>
        );
    }
}

export default Overview;
