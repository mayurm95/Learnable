const express = require('express')

const app = express();

app.listen(5000,() =>{
     console.log('Started');
})

app.get('/health-check',(request, response) => {
    console.log('request', request);
    return response.send('aaaa');
})