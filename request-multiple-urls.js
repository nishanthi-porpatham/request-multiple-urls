const axios = require('axios');

function requestMultipleurls(urls) {
    const promise = new Promise((resolve, reject) => {
        const multipleurlResponse = [];
        const responsePromises = urls.map(url => axios.get(url));
        Promise.all(responsePromises).then((responses) => {
            responses.forEach(response => multipleurlResponse.push(response.data));
            resolve(multipleurlResponse);
        }).catch((error) => {
            const errorMessage = {};
            if (error.response) {
                errorMessage.message = "Error while fetching data. Reason :" + error.response.statusText;
              } else if (error.request) {
                errorMessage.message = "Error while fetching data.Please try again later";
              } else {
                errorMessage.message = "Error while fetching data. Reason :" + error.message;
              }
              reject(errorMessage);
        });
    })
    return promise;
}

module.exports = {
    requestMultipleurls
}