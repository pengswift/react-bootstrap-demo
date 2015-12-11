import { SIGNIN_ADMIN } from '../constants/ActionTypes'

const initialState = {
    result: false 
};

export default function admin(state = initialState, action) {
    console.log("state before: ", state);
    switch (action.type) {
        case SIGNIN_ADMIN:
            return true;
        //case SIGNIN_ADMIN:
        //    return [
        //        {
        //            //id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        //            id: (state.length === 0) ? 0 : state[0].id + 1,
        //            marked: false,
        //            text: action.text
        //        },
        //        ...state
        //    ];
        //case CLEAR_MARKED:
        //    return state.filter(todo => todo.marked === false);
        default:
            return state;
    }
}



