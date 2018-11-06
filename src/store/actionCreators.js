// 管理action
import {
    CHANGE_INPUT_VALUE,
    CHANGE_LIST,
    DELETE_ITEM,
    INIT_LIST,
    GET_INIT_LIST
} from './actionTypes';
import axios from "axios";
export const getInputChangeAction = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});
export const addListItemAction = (value) => ({
    type:CHANGE_LIST,
    value
});
export const delListItemAction = (value) => ({
    type:DELETE_ITEM,
    value
});
export const initListAction = (data) => ({
    type:INIT_LIST,
    data
});
export const getListData = () => {
    return (dispatch) => {
        axios.get('/list.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            dispatch(action);
        }).catch(function(res){
            console.log(res)
        });
    }
};
export const getInitList = () => ({
    type:GET_INIT_LIST,
});