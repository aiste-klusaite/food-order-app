import React, { Fragment } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App: React.FC = () => {
  return (
    <Fragment>
      <Header/> 
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
