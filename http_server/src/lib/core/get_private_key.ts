import { readFileSync } from 'fs';
import { env } from 'process';


let private_key: Buffer;
if (!parseInt(env['IS_DEV'])) {
  private_key = readFileSync('/srv/host_private_key');
} else {
  console.warn(
    `YOU ARE USING A DEV BUILD, THUS THERE IS NO PRIVATE KEY TO SIGN WITH`
  );
  private_key = Buffer.from('DEV', 'utf-8');
}

export function get_private_key(): Buffer {
  return private_key;
};
