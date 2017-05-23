import React from 'react'
import { connect } from 'react-redux'

import Member from '../components/member-item'
import List from '../components/list'

import { projectActions } from '../actions/projects'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDelete: (member) => {
      dispatch(projectActions.removeMember(ownProps.params.id, member.id))
    },
    onAdd: (member) => {
      dispatch(projectActions.addMember(ownProps.params.id, member.id))
    }
  }
}

class MemberListEditContainer extends React.Component {
  configureAccessory (member) {
    const { projectMembers, onDelete, onAdd } = this.props
    const memberBelongsToProject = projectMembers.find((projectMember) => (projectMember.id === member.id))
    let accessory = null

    if (memberBelongsToProject) {
      let onDeleteBound = onDelete.bind(this, member)
      accessory = <button onClick={onDeleteBound}>Delete</button>

    } else {
      let onAddBound = onAdd.bind(this, member)
      accessory = <button onClick={onAddBound}>Add</button>

    }

    return accessory
  }

  configureMemberItem (member) {
    return (
      <Member
        {...member}
        rightAccessory={this.configureAccessory(member)}
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
