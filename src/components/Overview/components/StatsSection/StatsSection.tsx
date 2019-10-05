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
                <StatTitle>{stat}</StatTitle>
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
