import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, getGlobalState, useGlobalState } = createGlobalState({
  campaigns: [],
  campaign: null,
  statistics: null,
  donators: [],
  type: null,
});

export { setGlobalState, getGlobalState, useGlobalState };
