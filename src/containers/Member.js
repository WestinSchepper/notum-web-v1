import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'

import Member from '../components/member-detail'
import Projects from '../components/projects-list'
import Standups from '../components/standups-list'

import { memberActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let member = state.entities.members[ownProps.params.id] || {}

  if (member) {
    let projects = pick(state.entities.projects, member.projects)
    let standups = pick(state.entities.standups, member.standups)

    return {
      member,
      projects,
      standups
    }
  }

  return {
    member
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(memberActions.loadMember(ownProps.params.id))
    }
  }
}

class MemberContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    const { member, projects, standups } = this.props

    return (
      <div>
        <Member {...member} />
        <h3>Projects</h3>
        <Projects projects={projects} />
        <h3>Standups</h3>
        <Standups standups={standups} members={member} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)
