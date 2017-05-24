import React, { PropTypes } from 'react'

import Modal from '../modal'

const constraints = {
  'width': '240px'
}

const Alert = ({ title, message, cancelText, confirmText, onCancel, onConfirm }) => (
  <Modal title={title} constraints={constraints} onClose={onCancel}>
    <p>{message}</p>
    <button onClick={onCancel}>{cancelText}</button>
    <button onClick={onConfirm}>{confirmText}</button>
  </Modal>
)

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
}

export default Alert