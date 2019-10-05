import React from 'react';
import {
  Wrapper,
  Title,
  Container,
  Section,
  Row,
  StatTitle,
  StatValue,
  Header
} from './elements';
import { STATS_MAPPING } from '../../../../stores/reviewsStore';

type Props = {
  loaded: boolean,
  title: string,
  stats: {[ key: string ]: any} | undefined,
}

class StatsSection extends React.Component<Props> {
  render() {
    const { title, stats = {}, loaded } = this.props;

    return (
      <Wrapper>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Container>
          <Section>
          {loaded ? Object.keys(stats).map((stat: string) => {
            const statValue = stats[stat];
            if (!statValue) return null;

            return (
              <Row key={statValue}>
                <StatTitle>{STATS_MAPPING[stat] || stat}</StatTitle>
                <StatValue>{statValue}</StatValue>
              </Row>
            )
          }): 'Loading...'}
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default StatsSection;
