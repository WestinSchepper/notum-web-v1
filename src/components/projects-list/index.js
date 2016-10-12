import React, { PropTypes } from 'react'
import ProjectItem from '../project-item'
import { Link } from 'react-router'

const ProjectList = ({projects}) => (
  <ul>
    {(projects.length > 0)
      ? projects.map((project) =>
        (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <ProjectItem {...project} />
            </Link>
          </li>
        ))
      : <p>No projects we're found</p>
    }
  </ul>
)

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList
