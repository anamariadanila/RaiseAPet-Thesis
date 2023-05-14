import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, getGlobalState, useGlobalState } = createGlobalState({
  campaigns: [],
  campaign: null,
  statistics: null,
  donators: [],
  type: "",
});

export { setGlobalState, getGlobalState, useGlobalState };
