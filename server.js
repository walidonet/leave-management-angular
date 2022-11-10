

const express = require('express');
const app = express();

//app.use(requireHTTPS);
app.use(express.static('./dist/leave-management-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/leave-management-angular/'}),
);

app.listen(process.env.PORT || 8070);
