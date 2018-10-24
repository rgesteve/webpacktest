let express = require('express');
let path = require('path');

const SERVERPORT = 8080;

let app = express();
app.use(express.static(path.join(__dirname, '/')));

app.get((req, res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Looks like you didn't find a file we have");
});

app.listen(SERVERPORT, () => {
    console.log(`Started server at port ${SERVERPORT}`);
});
