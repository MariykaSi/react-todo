import {
  REQUEST_START,
  REQUEST_END,
  LOADER_SHOW,
  LOADER_HIDE
} from "../constants/actions/global";

export const requestStart = () => ({
  type: REQUEST_START
});

export const requestEnd = () => ({
  type: REQUEST_END
});

export const showLoader = () => ({
  type: LOADER_SHOW
});

export const hideLoader = () => ({
  type: LOADER_HIDE
});
