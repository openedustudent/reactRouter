const x = require('express');
const app = x();
app
.use(x.static('./build'))
.get('*', r => r.res.send('OK'))
.listen(process.env.PORT);
