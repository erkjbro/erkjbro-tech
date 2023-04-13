import { render } from "@testing-library/react";

import { StyledProvider } from "./styled-context";

describe("StyledContext", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <StyledProvider>
        <div>Test</div>
      </StyledProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
