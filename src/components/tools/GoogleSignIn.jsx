import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const GoogleSignInButton = ({ onSignIn }) => {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const handleSuccess = async (credentialResponse) => {
    try {
      await onSignIn(credentialResponse.credential);
    } catch (error) {
      console.error("Google sign-in failed", error);
    }
  };

  const handleFailure = (error) => {
    console.error("Google sign-in failed", error);
  };

  return (
    <GoogleOAuthProvider
      clientId={
        "877226461430-pp66jnn92m9sge9jb4f7seq2gv0re58h.apps.googleusercontent.com"
      }
    >
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleSignInButton;
