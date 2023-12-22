import { SignJWT } from 'jose';

export const generateRefreshToken = async () => {
  try {
    const refreshToken = await new SignJWT({})
    const token = jwt.sign(
      { id: checkUser?._id, role: checkUser?.role },
      jwtKey,
      { expiresIn: '1h' }
    );

    return refreshToken;
  } catch (error) {
    console.error('Error generating refresh token:', error);
    throw error;
  }
};
