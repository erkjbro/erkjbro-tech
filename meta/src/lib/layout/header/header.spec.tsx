import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './header';

describe('Sitenav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Router><Header /></Router>);
    expect(baseElement).toBeTruthy();
  });
});
