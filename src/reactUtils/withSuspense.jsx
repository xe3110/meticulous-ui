import { Suspense } from 'react';

const withSuspense = (WrappedComponent, fallback = null) => {
  const WithSuspense = (props) => (
    <Suspense fallback={fallback}>
      <WrappedComponent {...props} />
    </Suspense>
  );
  WithSuspense.displayName = `withSuspense(${WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component'})`;
  return WithSuspense;
};

export default withSuspense;
