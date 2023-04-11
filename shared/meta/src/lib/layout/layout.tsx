import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import { Sitenav, Footer } from "../..";
import { StyledLayout, LayoutBody } from "./layout.styled";

export const Layout: FC = () => {
  const navigation = useNavigation();
  return (
    <StyledLayout>
      <Sitenav />
      <LayoutBody>
        <div>
          {navigation.state !== "idle" && <p>Navigation in progress...</p>}
        </div>
        <Outlet />
      </LayoutBody>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
