import { render } from '@testing-library/react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from './layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
]);

describe('Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RouterProvider router={router} />);
    expect(baseElement).toBeTruthy();
  });
});
