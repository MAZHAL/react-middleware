import {
    CHANGE_INPUT_VALUE,
    CHANGE_LIST,
    DELETE_ITEM,
    INIT_LIST
} from './actionTypes';

const defaultState = {
    inputValue:'',
    list:[]
};

export default  (state = defaultState, action) =>{
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue:action.value
            };

        case CHANGE_LIST:
            return {
                ...state,
                inputValue:'',
                list:action.value
            };
        case DELETE_ITEM:
            return {
                ...state,
                list:action.value
            };
        case INIT_LIST:
            return{
                ...state,
                list:action.data
            };
        default:
            return state;

    }
}