import styled from 'styled-components';
import { device } from '../../../_common/Layout/media';

const LOW_RATING = 4;
const MEDIUM_RATING = 7;
const HIGH_RATING = 8;

export const Wrapper = styled.div``;
export const Header = styled.div`
  display: flex;
`;
export const RatingNumber = styled.div<{ rating: number}>`
  padding: 10px 22px;
  color: #ffff;
  font-size: 25px;
  display: inline-block;
  border-radius: 5px;
 
 background-color: ${({ rating }) => {
   
   if (rating <= LOW_RATING) {
     return'#ff3434';
   }
   
   if (rating <= MEDIUM_RATING) {
     return '#3ac135';
   }
   
   if (rating >= HIGH_RATING) {
     return '#03600d'
   }
   
  }};
  
`;
export const Title = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleText = styled.h2`
  margin-bottom: 0;
  font-size: 16px;
`;
export const TitleSubInfo = styled.div`
  font-size: 12px;
  color: #8a8a8a;
`;

export const RatingAspects = styled.div`
  overflow: hidden; /* simple clearfix */
  margin: 10px 0;

`;
export const Aspect = styled.div`
  float: left;
  width: 25%;
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  margin-bottom: 5px;
  
  @media ${device.tablet} {
    float: inherit;
    width: 100%;
  }
`;
export const AspectRating = styled.div`
  color: #757575
`;
export const AspectDescription = styled.div`
  color: #9e9e9e
`;

export const Description = styled.div``;

export const MetaInfo = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #8a8a8a;
`;
