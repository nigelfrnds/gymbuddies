import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCW-KirMxUv4BFngliq8VBbmBIp_WDIHX8',
      authDomain: 'gymbuddies-165c5.firebaseapp.com',
      databaseURL: 'https://gymbuddies-165c5.firebaseio.com',
      projectId: 'gymbuddies-165c5',
      storageBucket: 'gymbuddies-165c5.appspot.com',
      messagingSenderId: '598205541797'
 };
 firebase.initializeApp(config);
  }
render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
    <Router />
    </Provider>
  );
}
}

export default App;
