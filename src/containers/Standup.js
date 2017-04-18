import React from 'react'
import { connect } from 'react-redux'

import Standup from '../components/standup-detail'
import { loadStandup } from '../actions/standups'

const mapStateToProps = (state, ownProps) => {
  let standup = state.standups[ownProps.params.id] || {}
  let project = state.projects[standup.project] || {}
  let member = state.members[standup.member] || {}

  return {
    standup,
    project,
    member
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(loadStandup(ownProps.params.id))
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
