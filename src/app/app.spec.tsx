import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  // TODO: Make test meaningful for this app.
  // it('should have a greeting as the title', () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText(/Welcome erkjbro-tech/gi)).toBeTruthy();
  // });
});
