import { render } from '@testing-library/react';

import Personal from './personal';

describe('Personal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Personal />);
    expect(baseElement).toBeTruthy();
  });
});
