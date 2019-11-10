import { take, put, call, fork, select, all } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';
import * as actions from '../actions/actions';

export function fetchAll() {
    return fetch(`http://localhost:5001/api/v0/pin/ls`)
        .then(response => response.json())
}

export function* fetchData() {
    yield put(actions.getAllFiles())
    const files = yield call(fetchAll)
    yield put(actions.getAllFilesSucess(files))
}

export function postCall(data) {
    return fetch(`http://localhost:5001/api/v0/add?stream-channels=true`, { method: 'POST', body: JSON.stringify({ 'file-0': data }) })
        .then(response => response.json())
}

export function* postFile() {
    yield put(actions.uploadFile())
    const { file } = yield take(actions.uploadFile)
    const resp = yield call(postCall(file))
    yield put(actions.uploadFileSucess(resp))
    // yield put(fetchData())
}

export default function* root() {
    yield fork(fetchData)
    // yield fork(postFile)

}



