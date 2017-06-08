import {
  EMAIL_CHANGED2,
  PASSWORD_CHANGED2,
  LOGIN_USER_SUCCESS2,
  LOGIN_USER_FAIL2,
  LOGIN_USER2,
  WORKOUT_UPDATE,
  WORKOUT_CREATE,
  WORKOUT_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED2:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED2:
      return { ...state, password: action.payload };
    case LOGIN_USER2:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS2:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL2:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case WORKOUT_UPDATE:
          return { ...state, [action.payload.prop]: action.payload.value };
    case WORKOUT_CREATE:
          return INITIAL_STATE;
    case WORKOUT_SAVE_SUCCESS:
          return INITIAL_STATE;
    default:
          return state;
  }
};
