import React from "react";

import { Dimmer, Loader } from 'semantic-ui-react';

const LoadingOverlay = ({children}) => (
  <Dimmer active>
    <Loader>{children || 'LoadingOverlay'}</Loader>
  </Dimmer>
);

export default LoadingOverlay;
