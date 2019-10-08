import styled from 'styled-components';
import { device } from '../_common/Layout/media';

const MARGIN = 60;

export const Wrapper = styled.div`
    width: 30%;
    
   @media ${device.tablet} {
    width: 100%;
  }
`;

export const RatingContainer = styled.div`
  margin-top: ${MARGIN}px;
`;

export const StatsSectionContainer = styled.div`
  margin-top: ${MARGIN}px;
`;

export const TraveledWithContainer = styled.div`
  margin-top: ${MARGIN}px;
`;
