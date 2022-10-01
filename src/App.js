// Import React
import React from 'react';

// Import Layout
import Layout from 'layout';

// Import System
import System from 'system';

// Import Other Modules
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  console.log(uuidv4());

  return (
    <System>
      <Layout />
    </System>
  );
};

export default App;
