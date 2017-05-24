import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import pick from 'lodash/pick'
import values from 'lodash/values'

import MemberEdit from '../components/member-edit'
// import MemberListEditContainer from './MemberListEdit'
import Alert from '../components/alert'

import { memberActions } from '../actions/members'
import { projectsActions } from '../actions/projects'

const mapStateToProps = (state, ownProps) => {
  let member = state.entities.members[ownProps.params.id] || {}

  if (member) {
    let memberProjects = values(pick(state.entities.projects, member.projects))
    let projects = state.entities.projects

    return {
      member,
      memberProjects,
      projects,
      initialValues: {
        name: member.name,
        email: member.email
      }
    }
  }

  return member
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: () => {
      dispatch(projectsActions.loadProjects())
      dispatch(memberActions.loadMember(ownProps.params.id))
    },
    handleDelete: () => {
      dispatch(memberActions.removeMember(ownProps.params.id))
      dispatch(replace('/'))
    },
    onSubmit: (data) => {
      const formattedData = {
        member: {
          name: data.name,
          email: data.email
        }
      }

      dispatch(memberActions.updateMember(ownProps.params.id, formattedData))
    }
  }
}

class MemberEditContainer extends React.Component {
  constructor () {
    super()

    this.state = {
      alert: false
    }
  }

  componentWillMount () {
    this.props.loadData()
  }

  hideAlert () {
    this.setState({
      alert: false
    })
  }
  
  showAlert () {
    this.setState({
      alert: true
    })
  }
  
  deleteConfirmed () {
    this.props.handleDelete()
    this.hideAlert()
  }

  render () {
    const { member, initialValues, onSubmit, onDelete } = this.props

    return (
      <div>
        <MemberEdit {...member} initialValues={initialValues} onSubmit={onSubmit} onDelete={onDelete} />
        <h3>Members</h3>
        {/* <MemberListEditContainer {...this.props} /> */}
        <button onClick={this.showAlert.bind(this)}>Delete {member.name}</button>
        {this.state.alert &&
          <Alert
            title='Are you sure?'
            message={`Do you really want to delete ${member.name} from your members?`}
            cancelText='no'
            confirmText='yes'
            onCancel={this.hideAlert.bind(this)}
            onConfirm={this.deleteConfirmed.bind(this)}
          />}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberEditContainer)
