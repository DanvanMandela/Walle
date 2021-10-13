import {combineReducers} from "redux";
import {MovieReducer} from "./movieReducer";
import {MovieDetailReducer} from "./movieDetailReducer";
import {NavigationReducer} from "./navigationReducer";

const rootReducer = combineReducers({
    movieReducer: MovieReducer,
    movieDetailReducer: MovieDetailReducer,
    navigationReducer: NavigationReducer
});

export type ApplicationState = ReturnType<typeof rootReducer>
export {rootReducer};
