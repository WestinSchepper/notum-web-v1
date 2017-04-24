import React from 'react'
import { connect } from 'react-redux'

import Standup from '../components/standup-detail'
import { standupActions } from '../actions/standups'

const mapStateToProps = (state, ownProps) => {
  let standup = state.entities.standups[ownProps.params.id] || {}
  let project = state.entities.projects[standup.project] || {}
  let member = state.entities.members[standup.member] || {}

  return {
    standup,
    project,
    member
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(standupActions.loadStandup(ownProps.params.id))
    }
  }
}

class StandupContainer extends React.Component {
  componentWillMount () {
    this.props.loadData()
  }

  render () {
    return (
      <div>
        <Standup
          standup={this.props.standup}
          project={this.props.project}
          member={this.props.member}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StandupContainer)
