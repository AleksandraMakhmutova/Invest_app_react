import * as TYPES from "../types/types";

export const changeLang = (answers) => {
  return {
    type: TYPES.ADD_ANSWERS,
    payload: answers,
  };
};
