import React from 'react'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import Modal from '../components/modal'
import MemberCreateForm from '../components/member-create-form'

import { memberActions } from '../actions/members'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClose: () => {
      dispatch(replace('/'))
    },
    onSubmit: (data) => {
      const formattedData = {
        member: {
          name: data.name,
          email: data.email
        }
      }

      dispatch(memberActions.createMember(formattedData))
    }
  }
}

class MemberCreateContainer extends React.Component {
  render () {
    const { handleClose, onSubmit } = this.props

    return (
      <Modal title='Create Member' onClose={handleClose}>
        <MemberCreateForm onSubmit={onSubmit} />
      </Modal>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberCreateContainer)
