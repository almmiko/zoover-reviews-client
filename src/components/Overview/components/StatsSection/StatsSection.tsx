import React from 'react';
import { Wrapper, Title, Container, Section, Row, StatTitle, StatValue } from './elements';

class StatsSection extends React.Component<any> {
    render() {
        return (
            <Wrapper>
                <Title>Aspects</Title>
                <Container>
                    <Section>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                    </Section>
                    <Section>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                        <Row>
                            <StatTitle>location</StatTitle>
                            <StatValue>3</StatValue>
                        </Row>
                    </Section>
                </Container>
            </Wrapper>
        );
    }
}

export default StatsSection;
