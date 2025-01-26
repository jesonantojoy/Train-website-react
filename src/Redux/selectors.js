import { createSelector } from "reselect";

const selectTrainState = (state) => state.train;

export const selectUserDetails = createSelector(
  [selectTrainState],
  (train) => train.userDetails
);

export const selectJourneyDetails = createSelector(
  [selectTrainState],
  (train) => train.journeyDetails
);

export const selectPassengers = createSelector(
  [selectTrainState],
  (train) => train.passengers
);
