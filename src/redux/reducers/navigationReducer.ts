import {NavigationAction} from "../actions";

type NavState = {
    id: number
}
const initialState = {
    id: 0,
};

const NavigationReducer = (state: NavState = initialState, actions: NavigationAction) => {

    switch (actions.type) {
        case "DETAILS_ACTION":
            return {
                ...state,
                id: actions.payload
            };
        case "MOVIE_ACTION":
            return {
                ...state
            };
        default:
            return state;
    }
};

export {NavigationReducer};
