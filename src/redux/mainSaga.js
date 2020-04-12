import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth28191Saga from '../features/EmailAuth28191/redux/sagas';
import CalendarView28189Saga from '../features/CalendarView28189/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth28191Saga,
CalendarView28189Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}