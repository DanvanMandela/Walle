import { MovieDetailActions, MovieModel } from "../actions";

type MovieState = {
  movie: MovieModel
  error: string | undefined
}
const initialState = {
  movie: {} as MovieModel,
  error: undefined
};

const MovieDetailReducer = (state: MovieState = initialState, actions: MovieDetailActions) => {

  switch (actions.type) {
    case "ON_DETAILS":
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

export { MovieDetailReducer };
