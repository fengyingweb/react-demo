import React from 'react'
import './assets/css/App.css'
import {Provider} from 'react-redux' // 引入提供
import store from './store/store.js'
import AppRouter from './router/AppRouter'

const App = ()=> {
  return (
    <Provider store={store}>
      <div className="App-wrapper">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
