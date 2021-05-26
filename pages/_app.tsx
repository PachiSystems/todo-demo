import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { NextComponentType } from 'next';
import { Provider, ReactReduxContext } from 'react-redux';
import { ErrorFallback } from '../components/ErrorFallback';
import { wrapper } from '../store';

function AppCheckout({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: never;
}) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => (
        <Provider store={store}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </Provider>
      )}
    </ReactReduxContext.Consumer>
  );
}

export default wrapper.withRedux(AppCheckout);
