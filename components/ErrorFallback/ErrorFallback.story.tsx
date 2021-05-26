import React from 'react';
import { ErrorFallback } from './index';

export const Default: React.VFC<Record<string, unknown>> = () => (
  <ErrorFallback />
);
