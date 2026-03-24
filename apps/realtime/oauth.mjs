import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  "429578354776-l80m5t0e6iercbsrb4cbhkugt8afquf0.apps.googleusercontent.com"
);

export async function verifyGoogleToken(token){
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: "429578354776-l80m5t0e6iercbsrb4cbhkugt8afquf0.apps.googleusercontent.com"
  });

  return ticket.getPayload();
}
