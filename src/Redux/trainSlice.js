
import { createSlice } from "@reduxjs/toolkit";

const trainSlice = createSlice({
    name: "train",
    initialState: {
      userDetails: {},
      journeyDetails: {},
      trainOptions: [],
      passengers: [],
      fixedTrains: [],
    },
    reducers: {
      setUserDetails: (state, action) => {
        state.userDetails = action.payload;
      },
      setFixedTrains: (state, action) => {
        state.fixedTrains = action.payload;
      },
      setJourneyDetails: (state, action) => {
        state.journeyDetails = action.payload;
      },
      setTrainOptions: (state, action) => {
        state.trainOptions = action.payload;
      },
      setPassengers: (state, action) => {
        state.passengers = action.payload;
      },
    },
  });
  
  export default trainSlice.reducer;

export const { setUserDetails, setFixedTrains, setJourneyDetails, setTrainOptions, setPassengers } = trainSlice.actions;
  
 