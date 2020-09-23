import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsRedirectUser({ user, redirectPath, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }
        if (user) {
          return <Redirect to={{ pathname: redirectPath }} />;
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location }
              }}
            />
          );
        }
        if (user) {
          return children;
        }
        return null;
      }}
    />
  );
}
