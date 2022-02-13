import { useEffect } from 'react';

import { Portfolio } from './portfolio';
import { Div } from './shared/uiKit';

const App = () => {
  useEffect(() => { document.title = 'Erik J Brown Tech LLC' }, []);

  return (
    <Div
      sx={{
        minHeight: '100vh',
        border: '2px solid orange',
        textAlign: 'center',
      }}
    >
      <h1>Erik J Brown Tech LLC</h1>
      <Portfolio />
    </Div>
  );
};

export default App;
