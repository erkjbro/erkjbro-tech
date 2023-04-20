import styled from "styled-components";

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

export const LayoutBody = styled.div`
  min-height: calc(100vh - 14rem);
`;
