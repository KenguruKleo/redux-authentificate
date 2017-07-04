import URLS from '../api/urls';

export default (state = {}) => state;

export const singinUser = ({email, password}) => {
    return dispatch => {
        fetch(URLS.AUTH_SIGNIN, {
            method: 'post',
            body: JSON.stringify( {email, password} )
        })
    }
};