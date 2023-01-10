import { render } from '@testing-library/react';

import SharedMeta from './shared-meta';

describe('SharedMeta', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedMeta />);
    expect(baseElement).toBeTruthy();
  });
});
