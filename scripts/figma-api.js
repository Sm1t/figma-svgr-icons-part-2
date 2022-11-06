const axios = require('axios');

function FigmaApi({ personalAccessToken }) {
  const instance = axios.create({
    baseURL: 'https://api.figma.com/',
    headers: { 'X-Figma-Token': personalAccessToken },
  });

  return {
    getFile: (fileKey, { ids, ...opts } = {}) =>
      instance
        .get(`/v1/files/${fileKey}`, {
          params: {
            ids: ids?.join(','),
            ...opts,
          }
        })
        .then(res => res.data),
    getImage: (fileKey, { ids, ...opts } = {}) =>
      instance
        .get(`/v1/images/${fileKey}`, {
          params: {
            ids: ids?.join(','),
            ...opts,
          }
        })
        .then(res => res.data),
  }
}

module.exports = {
  FigmaApi,
}