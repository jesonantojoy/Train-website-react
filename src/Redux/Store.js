import { configureStore } from '@reduxjs/toolkit';
import trainSlice from'./trainSlice';

const store = configureStore({
    reducer: {
        train: trainSlice, 
      },
     });

export default store;
