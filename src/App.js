import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsLoggedIn, ProtectedRoute } from "./helpers/authHelper";
import * as ROUTES from "./constants/router";
import { useAuthListener } from "./hook";

export default function App() {
  const {user} = useAuthListener();
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsLoggedIn user={user} path={ROUTES.SING_IN}>
        <Signin />
      </IsLoggedIn>
      <IsLoggedIn user={user} path={ROUTES.SIGN_UP}>
        <Signup />
      </IsLoggedIn>
    </Router>
  );
}
