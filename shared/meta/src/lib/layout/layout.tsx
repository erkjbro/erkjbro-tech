import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import { Sitenav, Footer } from "../..";
import { StyledLayout, LayoutBody } from "./layout.styled";
import { Spinner } from "@erkjbro-tech/shared/ui-library";

export const Layout: FC = () => {
  const navigation = useNavigation();

  const BodyContent = () => {
    if (navigation.state !== "idle") {
      return <Spinner />;
    }
    return <Outlet />;
  }

  return (
    <StyledLayout>
      <Sitenav />
      <LayoutBody>
        <BodyContent />
      </LayoutBody>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
