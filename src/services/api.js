import opencage from 'opencage-api-client/dist/opencage-api.min';
// import opencage from 'opencage-api-client';

const batchGeocode = (key, addresses) => {
  return new Promise((resolve, reject) => {
    let results = [];
    let prs = [];
    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];
      if (address.length > 0) {
        const p = opencage
          .geocode({
            key,
            q: address,
          })
          .then(response => {
            const { geometry, formatted } = response.results[0];
            results.push({ input: address, geometry, formatted });
          });
        prs.push(p);
      }
    }
    Promise.all(prs).then(values => {
      resolve(results);
    });
  });
};

export default {
  batchGeocode,
};
