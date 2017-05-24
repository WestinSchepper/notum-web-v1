import React from 'react'
import { connect } from 'react-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import Member from '../components/member-detail'
import Projects from '../components/projects-list'
import Standups from '../components/standups-list'

import { memberActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  let member = state.entities.members[ownProps.params.id] || {}

  if (member) {
    let projects = values(pick(state.entities.projects, member.projects))
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
    return (
      <div>
        <Member {...this.props.member}/>
        <h3>Projects</h3>
        <Projects projects={this.props.projects}/>
        <h3>Standups</h3>
        <Standups standups={this.props.standups} members={this.props.member} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberContainer)
