import { SET_LOADING } from "../types";

export const Reducer = (state, { type, payload }) => {

    switch (type) {

        case SET_LOADING:
            return { ...state,
                loading: true
            };

        default:
            return state;
    }
};


