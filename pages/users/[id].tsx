import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

export const UserIDPage: FunctionComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      I HAVE AN ID OF
      {id}
    </div>
  );
};

export default UserIDPage;
