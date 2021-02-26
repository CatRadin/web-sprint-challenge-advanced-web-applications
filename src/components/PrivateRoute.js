import React from 'react'
import { Route, Redirect } from 'react-router-dom'


//This will make sure that you can only reach the bubble page when logged in. Other wise you will be redirected to the Login page.
const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
        {...rest}
        render = { props => localStorage.getItem('token')
         ? 
         <Component {...props} /> 
         : 
         <Redirect to='/' /> }
    />
    )
}
export default PrivateRoute








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in