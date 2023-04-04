import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import { Sitenav } from "../..";
import { StyledLayout } from "./layout.styled";

export const Layout: FC = () => {
  const navigation = useNavigation();
  return (
    <StyledLayout>
      <Sitenav />
      <div>
        {navigation.state !== "idle" && <p>Navigation in progress...</p>}
      </div>
      <Outlet />
    </StyledLayout>
  );
};

export default Layout;
