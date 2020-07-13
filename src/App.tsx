import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
