import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import workoutCreate from './components/WorkoutCreate';
import MainPage from './components/MainPage';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" />
      </Scene>

      <Scene key="info">
        <Scene
          key="userList"
          component={workoutCreate}
          title="Create User"
        />
      </Scene>
      <Scene key="main">
        <Scene
          key="mainPage"
          component={MainPage}
          title="GYM BUDDIES"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
