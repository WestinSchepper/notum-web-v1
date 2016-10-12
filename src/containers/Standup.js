import React from 'react'
import Standup from '../components/standup-detail'
import API from '../network/API'

class StandupContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      standup: []
    }
  }

  componentWillMount () {
    new API({uri: `/standups/${this.props.params.id}`}).GET().then((standup) => {
      this.setState({
        standup
      })
    })
  }

  render () {
    return (
      <div>
        <Standup {...this.state.standup}/>
      </div>
    )
  }
}

export default StandupContainer
