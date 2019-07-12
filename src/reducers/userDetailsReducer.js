import {
    GET_USER_DETAILS,
    END_USER_DETAILS,
} from '../actions/type';

const initialState = {
    userInfo : [],
    totalUser: ""
}

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_DETAILS: {
            return {
                ...state,
                userInfo: action.userInfo,
                totalUser: action.userInfo.length,
                loading: false,
                isSuccess: true
            }
        }
        case END_USER_DETAILS:
            return {
                ...state,
                userInfo: []}
        default:
            return state
    }
}
export default userDetailsReducer