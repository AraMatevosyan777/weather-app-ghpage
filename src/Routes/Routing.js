import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import routes from './publicRoutes'

const Routing = () => {
    return (
        <Switch>
            {routes.map(route =>
                (<Route key={route.path} exact={route.exact} path={route.path} component={route.component} />)
            )}
            <Redirect to='/weather' />
        </Switch>
    )
}

export default Routing
