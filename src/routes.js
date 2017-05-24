import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Landing from './containers/Landing'
import ProjectContainer from './containers/Project'
import ProjectEditContainer from './containers/ProjectEdit'
import ProjectCreateContainer from './containers/ProjectCreate'

import MemberContainer from './containers/Member'
import MemberEditContainer from './containers/MemberEdit'
import MemberCreateContainer from './containers/MemberCreate'

import StandupContainer from './containers/Standup'

import NotFound from './components/not-found'

export default (
  <Route>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path='projects'>
        <Route path='create' component={Landing}>
          <IndexRoute component={ProjectCreateContainer} />
        </Route>
        <Route path=':id'>
          <IndexRoute component={ProjectContainer} />
          <Route path='edit' component={ProjectEditContainer} />
        </Route>
      </Route>
      <Route path='members'>
        <Route path='create' component={Landing}>
          <IndexRoute component={MemberCreateContainer} />
        </Route>
        <Route path=':id'>
          <IndexRoute component={MemberContainer} />
          <Route path='edit' component={MemberEditContainer} />
        </Route>
      </Route>
      <Route path='standups/:id'>
        <IndexRoute component={StandupContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
)
