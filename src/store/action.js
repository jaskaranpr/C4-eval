import {
  GET_RESULT,
  GET_EXPLICIT,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DEC,
  SORT_BY_QUALITY_ASC,
  SORT_BY_QUALITY_DEC,
  SORT_BY_TITLE_ASC,
  SORT_BY_TITLE_DEC,
} from "./actionTypes";

export const getResults = (data) => ({
  type: GET_RESULT,
  payload: data,
});
export const getExplicit = () => ({
  type: GET_EXPLICIT,
});
export const sortByDateAsc = () => ({
  type: SORT_BY_DATE_ASC,
});
export const sortByDateDec = () => ({
  type: SORT_BY_DATE_DEC,
});
export const sortByTitleAsc = () => ({
  type: SORT_BY_TITLE_ASC,
});
export const sortByTitleDec = () => ({
  type: SORT_BY_TITLE_DEC,
});
export const sortByQualityAsc = () => ({
  type: SORT_BY_QUALITY_ASC,
});
export const sortByQualityDec = () => ({
  type: SORT_BY_QUALITY_DEC,
});
