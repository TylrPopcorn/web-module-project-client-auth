import React from "react";
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
    const { component, ...rest } = props
    return (
        <Route {...rest} render={(props) => {
            if (localStore.getItem('token')) {
                return (<component {...props} />)
            } else {
                return (
                    <Redirect to="/login" />
                )
            }
        }}
        />
    )

}

export default PrivateRoute;