import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Landing from './containers/Landing'
import ProjectContainer from './containers/Project'
import MemberContainer from './containers/Member'
import StandupContainer from './containers/Standup'

import NotFound from './components/not-found'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='projects/:id' component={ProjectContainer} />
      <Route path='members/:id' component={MemberContainer} />
      <Route path='standups/:id' component={StandupContainer} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)
