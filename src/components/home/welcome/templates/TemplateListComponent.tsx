import * as React from 'react';

import Grid from "@material-ui/core/Grid"

import { Template, StyledTemplateComponent } from "./TemplateComponent"

interface TemplateListProps {
  templates: Template[]
}

const TemplateListComponent: React.SFC<TemplateListProps> = (props) => {
  const templatesToShow = props.templates.slice(0, 2);
  return (
    <div>
      <Grid
        container
        spacing={32}>
        {templatesToShow.map((template, index) => {
          return <Grid item lg={3} md={4} key={index}>
            <StyledTemplateComponent {...template} />
          </Grid>
        })}
      </Grid>
    </div>
  )
};

export default TemplateListComponent;