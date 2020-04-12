import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth28191Reducer from '../features/EmailAuth28191/redux/reducers';
import CalendarView28189Reducer from '../features/CalendarView28189/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth28191: EmailAuth28191Reducer,
CalendarView28189: CalendarView28189Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});