import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Portfolio from './portfolio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  }
]);


describe('Portfolio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
  });
});
