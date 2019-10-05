import React from 'react';
import { Wrapper, Header, RatingNumber, Title, TitleText, TitleSubInfo, RatingAspects, Aspect, AspectDescription, AspectRating, Description, MetaInfo } from './elements';

class Comment extends React.Component<any> {
  render() {
    return (
      <Wrapper>
        <Header>
          <RatingNumber>8</RatingNumber>
          <Title>
            <TitleText>Tittle</TitleText>
            <TitleSubInfo>user, 13-12-44</TitleSubInfo>
          </Title>
        </Header>
        <RatingAspects>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
          <Aspect>
            <AspectDescription>Location</AspectDescription>
            <AspectRating>5</AspectRating>
          </Aspect>
        </RatingAspects>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem doloremque earum incidunt quibusdam quod. Accusamus animi, aperiam est facilis iure odio provident totam voluptate. Dicta eligendi ex modi tempora tenetur!
        </Description>
        <MetaInfo>
          Traveled with family in 12.44.44
        </MetaInfo>
      </Wrapper>
    );
  }
}

export default Comment;
