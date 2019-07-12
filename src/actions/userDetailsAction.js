import {getUser} from "../api/apiList";
import {
    GET_USER_DETAILS,
    END_USER_DETAILS,
} from './type';

export const getUserDetailsInfo = () => {
    return async (dispatch) => {
        try {
            const data = await getUser();
            dispatch({type: GET_USER_DETAILS, userInfo: data});
        } catch (error) {
            dispatch({type: END_USER_DETAILS});
        }
    }
};