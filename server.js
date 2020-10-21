const x = require('express');
const app = x();
app
.use(x.static('./build'))
.get('*', r => r.res.sendFile('public/index.html', { root: '.' }))
.listen(4321);