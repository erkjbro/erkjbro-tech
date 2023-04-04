import { render } from "@testing-library/react";

import AsyncWrapper, { FetchStatus } from "./async-wrapper";

describe('AsyncWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AsyncWrapper status={FetchStatus.LOADING}>
        Test
      </AsyncWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
