import axios from "axios";
import {API_KEY, BASE_URL} from "../../utils/constants";
import {Dispatch} from "react";


export interface SelectActions {
    readonly type: "ON_SELECT"
    payload: string
}

export interface ErrorAction {
    readonly type: "ON_ERROR"
    payload: any
}

export interface FetchAction {
    readonly type: "ON_FETCH"
    payload: MovieResponse
}


export interface MovieModel {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: string
    budget: number
    genres: [
        {
            "id": number,
            "name": string
        }
    ]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: MovieCompanies[]
    production_countries: [
        {
            iso_3166_1: string
            name: string
        }
    ]
    release_date: string
    revenue: string
    runtime: number
    spoken_languages: [
        {
            iso_639_1: string
            name: string
        }
    ]
    status: string
    tagline: string
    title: boolean
    video: boolean
    vote_average: number
    vote_count: number

}

export interface MovieCompanies {
    id: number
    logo_path: string
    name: string
    origin_country: string
}


export interface MovieResponse {
    page: number
    results: MovieModel[]
}

export type MovieActions = SelectActions | ErrorAction | FetchAction


export const onFetchMovies = () => {
    let url = `${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    return async (dispatch: Dispatch<MovieActions>) => {
        try {
            const response = await axios.get<MovieResponse>(url);
            if (!response) {
                dispatch({
                    type: "ON_ERROR",
                    payload: "Something went wrong"
                });

            } else {
                dispatch({
                    type: "ON_FETCH",
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

