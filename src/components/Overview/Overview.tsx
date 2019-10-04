import React from 'react';
import StatsSection from './components/StatsSection/StatsSection';
import Rating from './components/Rating/Rating';
import { Wrapper, RatingContainer, StatsSectionContainer, TraveledWithContainer } from './elements';

class Overview extends React.Component<any> {
    render() {
        return (
            <Wrapper>
              <RatingContainer>
                <Rating />
              </RatingContainer>
              <StatsSectionContainer>
                <StatsSection />
              </StatsSectionContainer>
              <TraveledWithContainer>
                <StatsSection />
              </TraveledWithContainer>
            </Wrapper>
        );
    }
}

export default Overview;
