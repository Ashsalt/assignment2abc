import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home-page'
import NotFound from './pages/not-found'
import User from './pages/user'
import UserForm from './pages/user-form'
import UsersPage from './pages/users-page'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/users' component={UsersPage} />
        <Route exact path='/users/new' component={UserForm} />
        <Route exact path='/users/:userId' component={User} />
        <Route exact path='/not-found' component={NotFound} />
        <Redirect from='*' to={'/not-found'} />
      </Switch>
    </BrowserRouter>
  )
}

export default AppRoutes
