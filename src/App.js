import { I18n } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';
import  {Amplify}   from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import React from 'react'
import {withAuthenticator} from 'aws-amplify/ui-react';
//import {withAuthenticator} from 'aws-amplify';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className='App'>
      <p> hola </p>
    </div>
  );
}

export default withAuthenticator(App);

