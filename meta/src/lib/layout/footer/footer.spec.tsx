import { render } from '@testing-library/react';

import Footer from './footer';
import { LINK_DATA } from '../links.data';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer links={LINK_DATA} />);
    expect(baseElement).toBeTruthy();
  });
});
