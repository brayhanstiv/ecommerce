// Packages
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';

// Components
import { Navbar } from './components';

// Pages
import {HomePage, ShoppingCartPage} from './pages';

//Store
import store from './redux';

const persistor = persistStore(store);

const App = () => {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/shopping-cart' element={<ShoppingCartPage />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  )
}

export default App