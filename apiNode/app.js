const express = require('express');
const morgan = require('morgan');
const logger = require('express-logger');

const consoleStamp = require('console-stamp')(console, '[HH:MM:ss.l]');
const bodyParser = require('body-parser');
const clientsJson = require('./clients.json');

const app = express();

morgan.format('mydate', () => console.log(new Date(), 'HH:MM:ss.l'));
app.use(logger({path: "./logfile.txt"}));
app.use(morgan('[:mydate] :method :url :status :res[content-length] - :remote-addr - :response-time ms'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const portToListen = process.argv.slice(2)[0] || 3000;

app.get('/', function(request, result) {
    result.send(clientsJson);
});

app.route('/client/:id')
    .get((request, result) => result.send(clientsJson.filter(client => client.id == request.params.id).pop() || {}))
    .delete((request, result) => {
            let statusToSend = 200;
            const indexToRemove = clientsJson.findIndex(client => client.id == request.params.id); 
            if (indexToRemove !== -1) {
                clientsJson.splice(indexToRemove, 1);
            } else { 
                statusToSend = 404;
            }
        
            result.status(statusToSend).send();
        }
    )     
    .put((request, result) => {
        try {
            const clientData = request.body.client; 
            clientsJson[clientsJson.findIndex(client => client.id == request.params.id)] = clientData;
            result.status(200).send(clientData);
        } catch (error) { console.log(error)
            result.status(400).send(error);
        }
    })

app.listen(portToListen, function() {
    console.log(`Starting clients API on http://localhost:${portToListen}`);
});