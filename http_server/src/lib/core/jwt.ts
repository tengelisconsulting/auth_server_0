import * as jwt from 'jsonwebtoken';

import { get_private_key } from './get_private_key';
import { get_env } from './get_env';


export async function generate_jwt(
  user_id: string,
): Promise<string> {
  const payload = { user_id: user_id };
  const options: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: get_env().session_expiry_s,
  };
  const private_key = get_private_key();
  return new Promise((resolve, reject) => {
    jwt.sign(payload, private_key, options, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

export async function verify_jwt_to_user_id(
  token: string
): Promise<string> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, get_private_key(), (err, result: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.user_id);
      }
    });
  });

}
