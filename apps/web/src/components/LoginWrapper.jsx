import { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from './Login';

export default function LoginWrapper({ onLogin }){

  const [mounted,setMounted]=useState(false);

  useEffect(()=>{
    setMounted(true);
  },[]);

  if(!mounted) return null;

  return (
    <GoogleOAuthProvider clientId="429578354776-l80m5t0e6iercbsrb4cbhkugt8afquf0.apps.googleusercontent.com">
      <Login onLogin={onLogin} />
    </GoogleOAuthProvider>
  );
}
