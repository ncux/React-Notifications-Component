import React, { useEffect, useReducer, createContext } from 'react';
import uuid from 'react-uuid'
import { Reducer } from "./reducer";
import { SET_LOADING } from "../types";

const GlobalState = {
    loading: false,
    notifications: [
        {
            id: uuid(),
            type: 'SUCCESS',
            message: 'Done!'
        }
    ]
};

export const NotificationsContext = createContext(GlobalState);

export const NotificationsState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, GlobalState);

    const setLoading = () => dispatch({ type: SET_LOADING });


    return (
        <NotificationsContext.Provider value={{
            loading: state.loading,
            notifications: state.notifications
        }}>
            { children }
        </NotificationsContext.Provider>
    )

};

