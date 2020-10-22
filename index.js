const requestMultipleUrls = require('./request-multiple-urls');
const requestMultipleurls = require('./request-multiple-urls');
const urls = [
    'https://jsonplaceholder.typicode.com/postss/1',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/posts?userId=1'
    ];
requestMultipleUrls.requestMultipleurls(urls).then(response => console.log(response)).catch(error => console.log(error));