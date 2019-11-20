import React from 'react';
import { Wrapper, Header, RatingNumber, Title, TitleText, TitleSubInfo, RatingAspects, Aspect, AspectDescription, AspectRating, Description, MetaInfo } from './elements';
import { observer } from 'mobx-react';
import moment from 'moment';
import { Resource } from '../../../../typings/reviewsComments';
import { STATS_MAPPING } from '../../../../reducers/reviewsReducer';

type Props = {
  comment: Resource,
};

@observer
class Comment extends React.Component<Props> {
  render() {
    const { comment } = this.props;
    const rating = comment.ratings.general.general;
    return (
      <Wrapper>
        <Header>
          <RatingNumber rating={rating}>{rating}</RatingNumber>
          <Title>
            <TitleText>{comment.titles[comment.locale]}</TitleText>
            <TitleSubInfo>{comment.user}, {moment(comment.entryDate).format('MM-DD-YYYY')}</TitleSubInfo>
          </Title>
        </Header>
        <RatingAspects>
          {Object.keys(comment.ratings.aspects).map((aspect: string) => {
            const aspectValue = comment.ratings.aspects[aspect];
            if (!aspectValue) return null;

            return (
              <Aspect key={aspect}>
                <AspectDescription>{STATS_MAPPING[aspect] || aspect}</AspectDescription>
                <AspectRating>{aspectValue}</AspectRating>
              </Aspect>
            );
          })}
        </RatingAspects>
        <Description>{comment.texts[comment.locale]}</Description>
        <MetaInfo>
          Traveled with {comment.traveledWith.toLowerCase()} in {moment(comment.travelDate).format('MMMM Do YYYY')}
        </MetaInfo>
      </Wrapper>
    );
  }
}

export default Comment;
