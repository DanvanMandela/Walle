import { MovieActions, MovieResponse } from "../actions";

type MovieState = {
  movie: MovieResponse
  error: string | undefined
}
const initialState = {
  movie: {} as MovieResponse,
  error: undefined
};

const MovieReducer = (state: MovieState = initialState, actions: MovieActions) => {

  switch (actions.type) {
    case "ON_FETCH":
      return {
        ...state,
        movie: actions.payload
      };
    case "ON_SELECT":
      return {
        ...state,
        movie: actions.payload
      };
    case "ON_ERROR":
      return {
        ...state,
        error: actions.payload
      };
    default:
      return state;
  }
};

export { MovieReducer };
