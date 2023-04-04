import { render } from '@testing-library/react';

import { Component } from './about';

describe('Personal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component />);
    expect(baseElement).toBeTruthy();
  });
});
