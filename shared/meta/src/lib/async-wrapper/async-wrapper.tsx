import { type ReactNode, type FC } from 'react';

import { Loader } from '@erkjbro-tech/shared/ui-library';

export enum FetchStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

export interface AsyncWrapperProps {
  status: FetchStatus;
  children: ReactNode;
}

const Error: FC = () => <p>Oops! Something went wrong.</p>;

const AsyncWrapper: FC<AsyncWrapperProps> = ({ status, children }) => {
  switch(status) {
    case FetchStatus.LOADING:
      return <Loader />;
    case FetchStatus.ERROR:
      return <Error />;
    case FetchStatus.SUCCESS:
      return <div>{children}</div>
    default:
      return <Error />;
  }
}

export default AsyncWrapper;
