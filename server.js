let express = require('express');

const SERVERPORT = 8080;

let app = express();
app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.listen(SERVERPORT, () => {
    console.log(`Started server at port ${SERVERPORT}`);
});
