import { createContext, useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './GithubReducer';
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;


const GithubProvider = ({ children }) => {

    const initialState = {
        users: [],
        isLoading: false,
        user: {},
        repos: [],
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // search users
    const searchUsersData = async (text) => {

        dispatch({
            type: 'IS_LOADING'
        });

        // query for search component
        const params = new URLSearchParams({
            q: text,
        });

        try {
            const response = await axios(`${GITHUB_URL}/search/users?${params}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
            const { items } = response.data;
            // console.log(items);
            dispatch({
                type: 'GET_USERS',
                payload: items
            })
        } catch (err) {
            console.log(err);
        }
    };

    // clear users from state
    const clearSearch = () => {

        dispatch({
            type: 'CLEAR_SEARCH'
        });
    };

    // get user
    const getUser = async (id) => {

        dispatch({
            type: 'IS_LOADING'
        });

        try {
            const response = await axios(`${GITHUB_URL}/users/${id}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })

            if (response.status === 404) {
                window.location = '/notfound'
            } else {
                const data = response.data
                // console.log(data);
                dispatch({
                    type: 'GET_USER',
                    payload: data
                })
            }
        } catch (err) {
            console.log(err);
        }
    };

    // get user repos
    const getUserRepos = async (id) => {

        dispatch({
            type: 'IS_LOADING'
        });

        // query for sort by latest repo
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10,
        });

        try {
            const response = await axios(`${GITHUB_URL}/users/${id}/repos?${params}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            })
            const data = response.data;
            // console.log(items);
            dispatch({
                type: 'GET_REPOS',
                payload: data
            })
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                isLoading: state.isLoading,
                user: state.user,
                repos: state.repos,
                searchUsersData,
                clearSearch,
                getUser,
                getUserRepos,
            }}>
            {children}

        </GithubContext.Provider>
    )
}



export { GithubContext, GithubProvider }