import React from 'react'
import { connect } from 'react-redux'

import Member from '../components/member-detail'
import Projects from '../components/projects-list'
import Standups from '../components/standups-list'

import { memberActions } from '../actions/members'

import { makeGetMember, makeGetMemberProjects, makeGetMemberStandups } from '../selectors'

const mapStateToProps = (state, ownProps) => {
  const getMember = makeGetMember()
  const member = getMember(state, ownProps.params.id)

  if (member) {
    const getMemberProjects = makeGetMemberProjects()
    const projects = getMemberProjects(state, member.id)
    const getMemberStandups = makeGetMemberStandups()
    const standups = getMemberStandups(state, member.id)

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
