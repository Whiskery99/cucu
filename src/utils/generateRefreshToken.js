import { SignJWT } from 'jose';

export const generateRefreshToken = async () => {
  try {
    const refreshToken = await new SignJWT({})
      .setSubject('refresh-token')
      .setExpirationTime('30m') // Set expiration time to 30 minutes
      .sign({
        key: jwtKey, // Your secret key
        alg: 'HS256', // Algorithm for signing the token
      });

    return refreshToken;
  } catch (error) {
    console.error('Error generating refresh token:', error);
    throw error;
  }
};
