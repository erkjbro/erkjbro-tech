import { useEffect } from 'react';

import { Portfolio } from './portfolio';
import { Div, Sitewide } from './shared/uiKit';

const App = () => {
  useEffect(() => { document.title = 'Erik J Brown Tech LLC' }, []);

  return (
    <Sitewide
      sx={{
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <h1>Erik J Brown Tech LLC</h1>
      <Portfolio />
    </Sitewide>
  );
};

export default App;
