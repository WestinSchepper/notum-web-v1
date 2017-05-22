import React from 'react'
import { connect } from 'react-redux'

import Member from '../components/member-item'
import List from '../components/list'

import { projectActions } from '../actions/projects'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (member) => {
      dispatch(projectActions.removeMember(ownProps.params.id, member.id))
    }
  }
}

class MemberListEditContainer extends React.Component {
  configureMemberItem (member) {
    let onDeleteBound = this.props.onDelete.bind(this, member)

    return (
      <Member
        {...member}
        rightAccessory={<button onClick={onDeleteBound}>Delete</button>}
      />
    )
  }

  render () {
    return (
      <List
        items={this.props.members}
        configureItem={this.configureMemberItem.bind(this)}
      />
    )
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(MemberListEditContainer)
