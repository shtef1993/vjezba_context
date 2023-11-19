import React, { createContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Komp1 from './komponente/komp1';
import Komp2 from './komponente/komp2';

export const MyContext = createContext();

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeClassName = theme === 'light' ? 'bg-light' : 'bg-dark text-white';

  return (
    <MyContext.Provider value={{ text: 'Pozdrav ekipa!', number: 93 }}>
      <div className={themeClassName}>
        <Button onClick={toggleTheme} variant="info" className="m-2">
          Toggle Theme
        </Button>
        <Komp1 />
        <Komp2 />
      </div>
    </MyContext.Provider>
  );
};

export default App;
