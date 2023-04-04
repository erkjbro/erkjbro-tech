import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { About } from './about';

const router = createBrowserRouter([
  {
    path: "/",
    element: <About />,
  }
]);
describe('About', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
  });
});
