import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '.';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Router><App /></Router>);
    expect(baseElement).toBeTruthy();
  });

  // it('should have a document title', () => {
  //   const { getByText } = render(<Router><App /></Router>);
  //   expect(getByText(/My Nx Website/i)).toBeTruthy();
  // });
});
