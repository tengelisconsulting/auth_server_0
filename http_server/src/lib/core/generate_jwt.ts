import * as jwt from 'jsonwebtoken';


export async function generate_jwt(
  user_id: string,
  private_key: Buffer
): Promise<string> {
  const payload = { user_id: user_id };
  const options = { algorithm: 'HS256' };
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
