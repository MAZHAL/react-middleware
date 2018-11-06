import {  takeEvery, put} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from "axios/index";
import {initListAction} from "./actionCreators";
import store from './store';

function* fetchUser(){
    try{
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch(err) {
        console.log(err);
    }

}
function* sages() {
    yield takeEvery(GET_INIT_LIST, fetchUser);
}

export default sages;