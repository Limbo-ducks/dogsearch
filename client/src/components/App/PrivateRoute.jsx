import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        console.log(location)
        return rest.user ? (
          children
        ) : (
          <Redirect
            to={'/login'}
          />
        )
      }
        
      }
    />
  );
}

export default PrivateRoute