import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
import * as ROUTES from "../constants/router";
import logo from "../logo.svg";

export default function HeaderContainer({ children }) {
  const location = useLocation();
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo} alt="Netflix" to={ROUTES.HOME} />
        {location.pathname === '/' ? (
          <Header.ButtonLink to={ROUTES.SING_IN}>Sign In</Header.ButtonLink>
        ) : null}
      </Header.Frame>
      {children}
    </Header>
  );
}
