import * as types from '../constType'

const initialState = {
    users: [],
    user: {},
    loading: true
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {

        // get profile
        case types.GET_USER: {
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        }


        case types.DELETE_USER:
        case types.ADD_USER:
        case types.UPDATE_USER:
            {
                return {
                    ...state,
                    loading: false
                }
            }

        case types.GET_USER_BY_ID: {
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer;