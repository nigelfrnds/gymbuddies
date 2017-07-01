import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import auth from './auth_reducer';

export default combineReducers({
  auth,
  form: reduxFormReducer,
});
