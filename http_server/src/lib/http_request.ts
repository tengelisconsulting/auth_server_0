import * as http from "http";

export function http_get(
  url: string,
): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      let response = '';
      const req = http.get(url, (response_stream) => {
        response_stream.setEncoding('utf-8');
        response_stream.on(
          'data', chunk => response = response.concat(chunk),
        );
        response_stream.on(
          'error', reject
        );
        response_stream.on(
          'end', () => resolve(
            JSON.parse(response)
          )
        );
      });
    } catch (e) {
      reject(e);
    }
  });
}
