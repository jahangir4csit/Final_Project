import { AUTH, LOGOUT } from '../../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch(action.type){
        case AUTH:
            sessionStorage.setItem('user', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data };
        case LOGOUT:
            sessionStorage.clear();
            return { ...state, authData: null };
        default: 
            return state;
    }
}
export default authReducer; 