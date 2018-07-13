import config from '../config/index';

const methods = ['get', 'post', 'put', 'patch', 'delete', 'file'];

export default class ApiClient {
  headers = {
    'Content-Type': 'application/json',
    // cache buster for IE11 which otherwise serves GET requests from cache
    Pragma: 'no-cache',
  };

  constructor(resolveUrl) {
    /* istanbul ignore next */
    methods.forEach(method => {
      this[method] = (path, { headers, data, params } = {}, host = 'local') => {
        return fetch(resolveUrl(path, host, config), {
          method: method === 'file' ? 'POST' : method.toUpperCase(),
          headers: this.getHeaders(headers, method),
          body:
            data &&
            JSON.stringify({
              // form data will need to be serialized later
              ...data,
            }),
          ...params,
        })
          .then(response => {
            if (response.status > 500) {
              return Promise.reject(response);
            }

            // todo: check for 300-400 range too for redirects

            // return empty json object in no-content responses
            if (response.status === 204) {
              return {};
            }

            // here we assume it's json
            return response.json();
          })
          .then(json => {
            if (Array.isArray(json.errors)) {
              return Promise.reject({
                ...json,
                requestData: { ...data },
                requestParams: { ...params },
              });
            } else if (json.message && json.message.code !== 200) {
              return Promise.reject({
                error: json.message,
                requestData: { ...data },
                requestParams: { ...params },
              });
            }

            return Promise.resolve(json);
          })
          .catch(response => {
            return Promise.reject(response);
          });
      };
    });
  }

  /* istanbul ignore next */
  getHeaders(additionalHeaders = {}, method) {
    const dynamicHeaders = { ...additionalHeaders };
    return method === 'file' ? dynamicHeaders : { ...this.headers, ...dynamicHeaders };
  }
}
