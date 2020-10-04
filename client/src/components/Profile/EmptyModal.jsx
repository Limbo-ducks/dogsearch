import React from 'react'
import { Tooltip } from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';

const Projects = ({ viewEmpty }) => {

  return (
    <section className="contentmodal contentmodal--messages">
      <article onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewEmpty(e.currentTarget)
            }} className="contentmodal__exit"><CancelIcon/>
      </article>
      <h3 className="contentmodal__title">Feature not implemented</h3>
    </section>
  )
}

export default Projects;
