import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  WORKOUT_UPDATE,
  WORKOUT_CREATE,
  WORKOUTS_FETCH_SUCCESS,
  WORKOUT_SAVE_SUCCESS,
  LOGIN_USER_FAIL2,
  LOGIN_USER_SUCCESS2,
  LOGIN_USER2,
  EMAIL_CHANGED2,
  PASSWORD_CHANGED2
} from './types';

export const WorkoutUpdate = ({ prop, value }) => {
  return {
    type: WORKOUT_UPDATE,
    payload: { prop, value }
  };
};

export const emailChanged2 = (text) => {
  return {
    type: EMAIL_CHANGED2,
    payload: text
  };
};

export const passwordChanged2 = (text) => {
  return {
    type: PASSWORD_CHANGED2,
    payload: text
  };
};

export const CreateUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER2 });
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess2(dispatch, user))
            .catch(() => loginUserFail2(dispatch));
};
};
const loginUserFail2 = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL2 });
};

const loginUserSuccess2 = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS2,
    payload: user
  });

  Actions.main();
};
export const WorkoutCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/workouts`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: WORKOUT_CREATE });
        Actions.main();
      });
  };
};

export const WorkoutFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/workouts`)
      .on('value', snapshot => {
        dispatch({ type: WORKOUTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const WorkoutSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/workouts/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: WORKOUT_SAVE_SUCCESS });
        Actions.main();
      });
  };
};

export const WorkoutDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/workouts/${uid}`)
      .remove()
      .then(() => {
        Actions.main();
      });
  };
};
