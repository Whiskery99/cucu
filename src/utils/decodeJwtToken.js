

import { jwtVerify, SignJWT } from 'jose';
import { jwtKey } from './jwtTokenKey';
import { NextResponse } from 'next/server';
import { generateRefreshToken } from './refreshTokenGenerator';

const decodeJwtToken = async (props) => {
  try {
    const AuthResponse = await jwtVerify(
      props,
      new TextEncoder().encode(jwtKey)
    );

    // Check if the token is about to expire (e.g., within the next 5 minutes)
    const expirationTime = AuthResponse.payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();

    if (expirationTime - currentTime < 5 * 60 * 1000) {
      // Token is about to expire, generate a new refresh token
      const refreshToken = await generateRefreshToken();
      console.log(refreshToken, 'refreshToken')

      // Include the refresh token in the response (you may want to store it securely)
      return {
        ...AuthResponse.payload,
        refreshToken,
      };
    }

    return AuthResponse.payload;
  } catch (error) {
    return NextResponse.json({
      success: false,
      state: 'error',
      message: 'Token has Expired',
    });
  }
};

export default decodeJwtToken;





// import { jwtVerify, SignJWT } from 'jose';
// import { jwtKey } from './jwtTokenKey';
// import { NextResponse } from 'next/server';

// const decodeJwtToken = async (props) => {
//   try {
//     const AuthResponse = await jwtVerify(
//       props,
//       new TextEncoder().encode(jwtKey)
//     );

//     return AuthResponse.payload;
//   } catch (error) {
//     return NextResponse.json({
//       success: false,
//       state: 'error',
//       message: 'Token has Expired',
//     });
//   }
// };

// export default decodeJwtToken;
