import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../aws-exports';

import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

Amplify.configure(awsExports);

type AuthenticatorAwsProps = {
  render: (userId: string | null) => ReactNode;
};

const AuthenticatorAws = ({ render }: AuthenticatorAwsProps) => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          {render(user ? user.username : null)}
          <Button onClick={signOut}>
            Sign Out
          </Button>
        </>
      )}
    </Authenticator>
  );
};

export default AuthenticatorAws;
