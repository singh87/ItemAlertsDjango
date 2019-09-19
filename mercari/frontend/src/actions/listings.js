import axios from 'axios'

import { GET_LISTINGS } from "./types";

// GET LISTINGS
export const getListings = () => dispatch => {
    axios.get('/api/listings')
        .then(res => {
            dispatch({
                type: GET_LISTINGS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}
