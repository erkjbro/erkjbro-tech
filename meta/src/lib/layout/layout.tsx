import { FC } from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Header from "./header/header";
import Footer from "./footer/footer";
import { LayoutBody, StyledLayout } from "./layout.styled";
import { Spinner } from "@erkjbro-tech/shared/ui";
import { LINK_DATA } from "./links.data";

export const Layout: FC = () => {
  const navigation = useNavigation();

  const BodyContent = () => {
    if (navigation.state !== "idle") {
      return <Spinner />;
    }
    return <Outlet />;
  };

  return (
    <StyledLayout>
      <Header />
      <LayoutBody>
        <BodyContent />
      </LayoutBody>
      <Footer links={LINK_DATA} />
    </StyledLayout>
  );
};

export default Layout;
