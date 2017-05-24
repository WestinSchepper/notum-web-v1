import React, { PropTypes } from 'react'
import Modal from 'react-modal'

import './Modal.css'

const defaultConstraints = {
  'maxWidth': '700px',
  'minWidth': '300px'
}

const BaseModal = ({onClose, children, title, constraints = defaultConstraints, contentClassName}) => (
  <Modal
    isOpen
    className='Modal-container'
    overlayClassName='Modal'
    requestClose={onClose}
    contentLabel='Modal'
    style={{content: constraints}}>

    <button className='Modal-close-button' onClick={onClose} />
    <h1 className='Modal-title'>{title}</h1>
    <div className={contentClassName}>
      {children}
    </div>
  </Modal>
)

BaseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  constraints: PropTypes.object,
  contentClassName: PropTypes.string
}

export default BaseModal
