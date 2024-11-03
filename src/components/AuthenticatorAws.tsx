import {Amplify} from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './../aws-exports';

import { Button } from '@/components/ui/button'

Amplify.configure(awsExports);

const AuthenticatorAws = () => {

    return  <Authenticator>
    {({ signOut }) => (
      <main>
        <header className='App-header'>
         
         
          <Button 
            onClick={signOut} 
           
          >
            Sign Out
          </Button>
        </header>
      </main>
    )}
  </Authenticator>
}

export default withAuthenticator(AuthenticatorAws);
