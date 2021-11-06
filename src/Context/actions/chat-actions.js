import * as actions from "../action-types";

const createNewUserInit = () => {
    return{
        type:actions.CREATE_NEW_USER_INIT,
    }
}

const createNewUserSuccess = (response) => {
    return{
        type:actions.CREATE_NEW_USER_SUCCESS,
        payload:response
    }
}

const createNewUserFail = (response) => {
    return{
        type:actions.CREATE_NEW_USER_FAIL,
        payload:response
    }
}

const createNewUser = (dispatch) => {
    dispatch(createNewUserInit());
    dispatch(createNewUserSuccess());
    dispatch(createNewUserFail());
}

export {createNewUser};

