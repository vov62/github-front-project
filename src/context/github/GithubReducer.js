import React from 'react'

const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, users: action.payload, isLoading: false }
        case 'IS_LOADING':
            return { ...state, isLoading: true }
        case 'CLEAR_SEARCH':
            return { ...state, users: [] };
        case 'GET_USER':
            return { ...state, user: action.payload, isLoading: false }
        case 'GET_REPOS':
            return { ...state, repos: action.payload, isLoading: false }
        default:
            return state;
    }
}

export default GithubReducer;