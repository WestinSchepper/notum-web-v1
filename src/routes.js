import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Landing from './containers/Landing'
import ProjectContainer from './containers/Project'
import ProjectEditContainer from './containers/ProjectEdit'

import MemberContainer from './containers/Member'
import StandupContainer from './containers/Standup'

import NotFound from './components/not-found'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='projects/:id'>
        <IndexRoute component={ProjectContainer} />
        <Route path='edit' component={ProjectEditContainer} />
      </Route>
      <Route path='members/:id'>
        <IndexRoute component={MemberContainer} />
      </Route>
      <Route path='standups/:id'>
        <IndexRoute component={StandupContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)
