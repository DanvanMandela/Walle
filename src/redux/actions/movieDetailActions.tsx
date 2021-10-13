import axios from "axios";
import { API_KEY, BASE_URL } from "../../utils/constants";
import { Dispatch } from "react";
import { ErrorAction, MovieModel, SelectActions } from "./movieActions";


export interface DetailsAction {
  readonly type: "ON_DETAILS"
  payload: MovieModel
}


export type MovieDetailActions = SelectActions | ErrorAction | DetailsAction


export const onDetails = (id: string) => {
  let url = `${BASE_URL}3/movie/${id}?api_key=${API_KEY}`;

  return async (dispatch: Dispatch<MovieDetailActions>) => {
    try {
      const response = await axios.get<MovieModel>(url);
      if (!response) {
        dispatch({
          type: "ON_ERROR",
          payload: "Something went wrong"
        });

      } else {
        dispatch({
          type: "ON_DETAILS",
          payload: response.data
        });
      }
    } catch (e) {

      dispatch({
        type: "ON_ERROR",
        payload: e
      });
    }

  };

};
