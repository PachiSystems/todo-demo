import React, { FunctionComponent } from 'react';

import { Grid } from '@havenengineering/module-shared-library';

export const HomePage: FunctionComponent = () => (
  <>
    <div>
      <Grid.Container>
        <Grid.Row>
          <Grid.Col>
            <h1>TODO LIST</h1>
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
    </div>
  </>
);

export default HomePage;
