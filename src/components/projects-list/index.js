import React, { PropTypes } from 'react'
import ProjectItem from '../project-item'
import { Link } from 'react-router'

import List from '../list'

const ProjectList = ({projects}) => (
  <List items={projects} configureItem={
    (project) => (
      <Link to={`/projects/${project.id}`}>
        <ProjectItem {...project} />
      </Link>
    )
  } />
)

ProjectList.propTypes = {
  projects: PropTypes.object.isRequired
}

export default ProjectList
