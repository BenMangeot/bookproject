import React, { Component } from 'react';
import Livres from './containers/livres';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Store from './stores/configureStore';

class App extends Component {

  render(){
    return (
      <>
      <Provider store={Store}> 
        <h1>
          Mes livres
    </h1>
        <Livres />
        </Provider>
      </>
    );
  }
}

export default hot(App);
