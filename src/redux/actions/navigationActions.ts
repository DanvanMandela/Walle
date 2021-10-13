import {NavigationService} from "../../navigation";
import {Dispatch} from "react";



export interface NavMovieAction {
    readonly type: "MOVIE_ACTION"
}

export interface NavMovieDetailsAction {
    readonly type: "DETAILS_ACTION"
    payload: number
}


export type NavigationAction = NavMovieAction | NavMovieDetailsAction

export const onNavigationDetails = (data: number) => {
    return (dispatch: Dispatch<NavigationAction>) => {
        dispatch({
            type: "DETAILS_ACTION",
            payload: data
        });
        NavigationService.navigate("details");
    }
}

export const onNavigationMovie = () => {
    return (dispatch: Dispatch<NavigationAction>) => {
        dispatch({
            type: "MOVIE_ACTION",
        });
        NavigationService.navigate("movies");
    }
}

