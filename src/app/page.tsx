import React from 'react'
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

const page = () => {
  return (
    <div>page</div>
  )
}

export default page