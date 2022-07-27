import { call, put, takeLatest } from 'redux-saga/effects';
import { logIn } from '../services/authService';

function* logInSaga({ payload }) {
    try {
        const { firstName, lastName } = payload;
        yield call(logIn, firstName, lastName);
        yield put({ type: 'AUTHORIZATION_SUCCESS', payload: { firstName, lastName } });
    } catch (error) {
        yield put({ type: 'AUTHORIZATION_FAIL', payload: error.message, error: true });
    }
}

export default function* loginSagaWrapper () {
    yield takeLatest('LOG_IN', logInSaga);
}