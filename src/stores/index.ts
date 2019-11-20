import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from '../reducers/reviewsReducer';

export default configureStore({
  devTools: true, // todo NODE_ENV PROD = false
  reducer: {
    reviews: reviewsReducer
  }
});
