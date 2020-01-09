/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { name as appName } from './app.json';
import reducers from './src/reducers';

const store = createStore(reducers);

const AppContainer = () => (
    <Provider store={store}>
      <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
