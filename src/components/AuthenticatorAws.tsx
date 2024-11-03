import {Amplify} from 'aws-amplify';
import { type AuthUser } from "@aws-amplify/auth";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../aws-exports';

import { Button } from '@/components/ui/button'
import type { ReactNode } from 'react';

Amplify.configure(awsExports);

const AuthenticatorAws = ({ children }: { children?: (user: AuthUser["userId"] | null) => ReactNode }) => {

    return  <Authenticator>
   {({ signOut, user }) => {
        return (
          <>
         {children ? children(user ? user.userId : null) : null}
            <Button onClick={signOut}>
              Sign Out
            </Button>
          </>
        );
      }}
  </Authenticator>
}

export default AuthenticatorAws;
