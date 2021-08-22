import React from "react";
import { Redirect, Route } from "react-router-dom";
export function ProtectedRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "/signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function IsLoggedIn({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) {
          return (
            <Redirect
              to={{
                pathname: "/browse",
              }}
            />
          );
        }

        if (!user) {
          return children;
        }
      }}
    />
  );
}
