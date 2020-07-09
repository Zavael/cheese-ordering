const server = require('./src/server');
const port = process.env.PORT || 3000;
const log = require('./src/logger')(__filename.slice(__dirname.length + 1));

if (process.env.NODE_ENV !== 'production') {
    const db = require('./src/db');
    db.executeScript('./bin/schema.sql', function () {
        db.executeScript('./bin/data.sql');
    });
}

server
    .createServer()
    .listen(port, () => log.info(`Server up and listening on port ${port}`));