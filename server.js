

const express = require('express');
const app = express();


app.use('/',express.static('./dist/leave-management-angular'));


console.log('aaaaaa')
app.listen(8070, () => console.log(`API running on `));
