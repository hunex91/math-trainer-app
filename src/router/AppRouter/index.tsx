import React, { Fragment, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoadingView from 'views/LoadingView'
import routes from '../routes'

const renderRoutes = (routes: any[]) =>
  routes ? (
    <Suspense fallback={<LoadingView />}>
      <Switch>
        {routes.map((route, index) => {
          const Guard = route.guard || Fragment
          const Wrapper = route.wrapper || Fragment
          const Component = route.component || Fragment

          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Wrapper>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Wrapper>
                </Guard>
              )}
            />
          )
        })}
      </Switch>
    </Suspense>
  ) : null

const AppRouter = () => {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
}

export default AppRouter
