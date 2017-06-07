import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FirstPageReducer from './FirstPageReducer';
import FirstPageFormReducer from './FirstPageFormReducer';

export default combineReducers({
  auth: AuthReducer,
  FirstForm: FirstPageReducer,
  workouts: FirstPageFormReducer
});
