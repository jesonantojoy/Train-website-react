import { configureStore } from '@reduxjs/toolkit';
import trainSlice from'./trainSlice';

const store = configureStore({
    reducer: {
        train: trainSlice, // Add the train slice to the store
      },
     });

export default store;
