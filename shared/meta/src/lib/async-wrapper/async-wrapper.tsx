import { Suspense, type ReactNode, type FC } from 'react';
import { Await } from "react-router-dom";

import { Spinner } from '@erkjbro-tech/shared/ui-library';

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

export interface AsyncWrapperProps {
  status: FetchStatus;
  dataToResolve: unknown;
  fallback?: ReactNode;
  children: ReactNode;
}

const Error: FC = () => <p>Oops! Something went wrong.</p>;

const AsyncWrapper: FC<AsyncWrapperProps> = ({ status, dataToResolve, children }) => {
  switch(status) {
    case FetchStatus.LOADING:
      return <Spinner />;
    case FetchStatus.ERROR:
      return <Error />;
    case FetchStatus.SUCCESS:
      return (
        <Suspense fallback={<Spinner />}>
          <Await
            resolve={dataToResolve}
            errorElement={<Error />}
          >
            {children}
          </Await>
        </Suspense>
      )
    default:
      return <Error />;
  }
}

export default AsyncWrapper;
