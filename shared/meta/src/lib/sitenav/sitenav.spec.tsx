import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Sitenav from './sitenav';

describe('Sitenav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Router><Sitenav /></Router>);
    expect(baseElement).toBeTruthy();
  });
});
