import React, { PropTypes } from 'react'
import Standup from '../standup-item'
import { Link } from 'react-router'

import List from '../list'

class StandupsList extends React.Component {
  configureStandupItem (standup) {
    return (
      <Link to={`/standups/${standup.id}`}>
        <Standup {...standup} project={this.props.project} member={this.props.members[standup.member_id]} />
      </Link>
    )
  }
  
  render () {
    return (
      <List
        items={this.props.standups}
        configureItem={this.configureStandupItem.bind(this)}
      />
    )
  }
}

StandupsList.propTypes = {
  standups: PropTypes.object.isRequired
}

export default StandupsList
