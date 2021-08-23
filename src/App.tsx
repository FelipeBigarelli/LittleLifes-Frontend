import React, { useEffect, createContext, useReducer } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

import Routes from './routes/index';

import { reducer, initialState } from './reducers/userReducer.js';

interface UsrContext {
  state: string;
  dispatch: any;
}

export const UserContext = createContext<UsrContext | any>({});

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyle />
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
